import { getCurrentShoppingListIndexes } from '../helpers/reducers-fn'
import { CategoryItemsType, ListItem } from '../types'
import { useCategoriesItems } from './useCategoriesItems'
import { useShoppingListContext } from './useShoppingListContext'

export const useItemDetails = (itemId: string, categoryId: string) => {
  const { categoriesItems, deleteItem } = useCategoriesItems()
  const { currentShoppingList } = useShoppingListContext()

  const { indexItem } = !!currentShoppingList
    ? getCurrentShoppingListIndexes(
        currentShoppingList.categories,
        categoryId,
        itemId
      )
    : { indexItem: -1 }
  const isItemExistInCurrentShoppingList =
    !!currentShoppingList && indexItem > -1
  const item = findItem(categoriesItems, categoryId, itemId)
  return (
    item && {
      ...item,
      isItemExistInCurrentShoppingList,
      deleteItem: () => deleteItem(itemId, categoryId),
    }
  )
}

function findItem(
  list: CategoryItemsType[],
  categoryId: string,
  itemId: string
) {
  const category = list.find((category) => categoryId === category.id)
  if (!category) return null

  const item: ListItem | undefined = category.items.find(
    (item) => item.id === itemId
  )
  if (!!item) {
    return {
      item,
      categoryTitle: category.title,
      shoppingListItemsDetails: {
        id: itemId,
        name: item.label,
        quantity: 1,
        checked: false,
      },
      shoppingListCategoryDetails: { categoryId, categoryName: category.title },
    }
  } else {
    return null
  }
}
