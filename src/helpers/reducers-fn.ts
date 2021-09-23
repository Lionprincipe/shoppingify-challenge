import { ShoppingCategoryType } from '../contexts'

export function getCurrentShoppingListIndexes(
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
