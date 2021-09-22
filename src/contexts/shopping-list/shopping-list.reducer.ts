import produce from 'immer'
import { createDataId } from '../../helpers/uuid-generator'
import { ShoppingListActionsTypes } from './shopping-list.action-types'
import { ShoppingListPayloadType } from './shopping-list.actions'

import {
  ShoppingCategoryType,
  ShoppingListItemType,
  ShoppingListType,
  ShoppingListTypeContext,
} from '.'

export const shoppingListReducer = produce(
  (
    state: Omit<ShoppingListTypeContext, 'dispatch'>,
    action: { type: ShoppingListActionsTypes; payload: ShoppingListPayloadType }
  ) => {
    const { type, payload } = action
    switch (type) {
      case ShoppingListActionsTypes.ADD_ITEM_TO_CURRENT_SHOPPING_LIST: {
        const { categoryId, categoryName, item } = payload
        const currentList = state.shoppingList.currentShoppingList
        if (!currentList) {
          state.shoppingList.currentShoppingList = setEmptyCurrentShoppingList(
            categoryId,
            categoryName,
            item
          )
        } else {
          const categories = currentList.categories
          const { indexCategory, indexItem } = getCurrentShoppingListIndexes(
            categories,
            categoryId,
            item.id
          )
          if (indexCategory > -1 && indexItem > -1) {
            categories[indexCategory].items[indexItem].quantity++
          } else if (indexCategory > -1) {
            categories[indexCategory].items.push(item)
          } else {
            categories.push({
              id: categoryId,
              title: categoryName,
              items: [item],
            })
          }
        }
        break
      }
      default:
        return state
    }
  }
)

function setEmptyCurrentShoppingList(
  categoryId: string,
  categoryName: string,
  item: ShoppingListItemType
): ShoppingListType {
  const categories = [{ id: categoryId, title: categoryName, items: [item] }]
  return {
    id: createDataId(),
    name: '',
    date: 'Mon 16.9.2020',
    status: 'current',
    categories,
  }
}

function getCurrentShoppingListIndexes(
  categories: ShoppingCategoryType[],
  categoryId: string,
  itemId: string
) {
  const indexCategory = categories.findIndex(
    (category) => category.id === categoryId
  )

  let indexItem = -1
  if (indexCategory > -1) {
    const items = categories[indexCategory].items
    indexItem = items.findIndex((el) => el.id === itemId)
  }
  return { indexItem, indexCategory }
}
