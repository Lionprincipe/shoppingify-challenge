import { useContext } from 'react'
import {
  addItemToCurrentShoppingList,
  completeToCurrentShoppingList,
  editCurrentShoppingListName,
  moveCurrentShoppingListToHistory,
  removeItemFromCurrentShoppingList,
  toggleCheckedItemInCurrentShoppingListItem,
  updateCurrentShoppingListItemQuantity,
} from '../contexts/shopping-list/shopping-list.actions'
import { ShoppingListContext } from '../contexts/shopping-list/shopping-list.context'
import {
  formatCurrentDate,
  formatStringDateToDateTimeStamp,
} from '../helpers/date-fns'
import { getComparator, stableSort } from '../helpers/stable-sort'
import { ShoppingListStatus } from '../types'
import { useModalAlert } from './useModalAlert'
const CANCEL_SHOPPING_LIST_ALERT_MESSAGE =
  'Are you sure that you want to cancel this list'

export const useShoppingListContext = () => {
  const { shoppingList, dispatch } = useContext(ShoppingListContext)
  const { addModal } = useModalAlert()

  const cancelCurrentShoppingList = () =>
    addModal({
      message: CANCEL_SHOPPING_LIST_ALERT_MESSAGE,
      confirmFn: () => {
        moveCurrentShoppingListToHistory(dispatch)(ShoppingListStatus.CANCELLED)
      },
    })
  const archiveCurrentShoppingList = () =>
    moveCurrentShoppingListToHistory(dispatch)(ShoppingListStatus.COMPLETE)

  const incrementItemQuantity = (categoryId: string, itemId: string) =>
    updateCurrentShoppingListItemQuantity(dispatch)(categoryId, itemId)

  const decrementItemQuantity = (categoryId: string, itemId: string) =>
    updateCurrentShoppingListItemQuantity(dispatch)(categoryId, itemId, -1)

  const checkItemFn = (categoryId: string) => (itemId: string) =>
    toggleCheckedItemInCurrentShoppingListItem(dispatch)(categoryId, itemId)

  const isCurrentListCompleted =
    !!shoppingList.currentShoppingList &&
    shoppingList.currentShoppingList.categories.every((category) =>
      category.items.every((item) => item.checked === true)
    )

  const countItemsInCurrentShoppingList = !!shoppingList.currentShoppingList
    ? countItemsInShoppingList(shoppingList.currentShoppingList.categories)
    : 0

  return {
    countItemsInCurrentShoppingList,
    isCurrentListCompleted,
    currentShoppingList: shoppingList.currentShoppingList,
    listInfos: getMonthlyListHistory(shoppingList.shoppingListHistory),
    cancelCurrentShoppingList,
    archiveCurrentShoppingList,
    checkItemFn,
    decrementItemQuantity,
    incrementItemQuantity,
    editCurrentShoppingListName: editCurrentShoppingListName(dispatch),
    removeItemFn: removeItemFromCurrentShoppingList(dispatch),
    addItemToShoppingList: addItemToCurrentShoppingList(dispatch),
    completeCurrentShoppingList: completeToCurrentShoppingList(dispatch),
  }
}

function countItemsInShoppingList<T extends { items: any[] }>(list: T[]) {
  return list.reduce((count, el) => count + el.items.length, 0)
}

function getMonthlyListHistory<T extends { date: string }>(
  shoppingLists: T[]
): { date: string; lists: T[] }[] {
  const comparator = getComparator(
    'desc',
    'date',
    formatStringDateToDateTimeStamp
  )
  return stableSort(shoppingLists, comparator).reduce<
    { date: string; lists: T[] }[]
  >((acc, curr) => {
    const currentDate = formatCurrentDate(curr.date)
    if (acc.some((el: { date: string }) => el.date === currentDate)) {
      return acc
    } else {
      const lists = shoppingLists.filter(
        (shoppingList) => formatCurrentDate(shoppingList.date) === currentDate
      )
      return [...acc, { date: currentDate, lists }]
    }
  }, [])
}
