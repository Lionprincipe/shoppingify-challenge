import { CategoryItemsType, ListItem } from '../types'
import { useCategoriesItems } from './useCategoriesItems'

export const useItemDetails = (itemId: string, categoryId: string) => {
  const { categoriesItems } = useCategoriesItems()
  const item = findItem(categoriesItems, categoryId, itemId)
  return item
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
      ...item,
      categoryTitle: category.title,
    }
  } else {
    return null
  }
}
