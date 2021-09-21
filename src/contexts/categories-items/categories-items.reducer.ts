import { CategoriesItemsType } from '../../contexts/categories-items/categories-items.context'
import { createDataId } from '../../helpers/uuid-generator'
import { ListItem } from '../../types'
import { PayloadType } from './categories-items.actions'
import { CategoriesItemsActionsTypes } from './categories-items.actions-type'

export function categoriesItemsReducer(
  state: Omit<CategoriesItemsType, 'dispatch'>,
  action: { type: CategoriesItemsActionsTypes; payload: PayloadType }
) {
  switch (action.type) {
    case CategoriesItemsActionsTypes.ADD_ITEM_TO_CATEGORY: {
      const { categoriesItems } = state
      const { name, category, imageUrl = '', note = '' } = action.payload
      const newItem: ListItem = {
        id: createDataId(),
        label: name,
        imageUrl,
        note,
      }

      const categoryIndex = state.categoriesItems.findIndex(
        (categories) => categories.title === category
      )

      const updatedCategory =
        categoryIndex > -1
          ? {
              ...categoriesItems[categoryIndex],
              items: [...categoriesItems[categoryIndex].items, newItem],
            }
          : {
              title: category,
              id: createDataId(),
              items: [newItem],
            }

      return {
        ...state,
        categoriesItems:
          categoryIndex > -1
            ? [
                ...categoriesItems.slice(0, categoryIndex),
                updatedCategory,
                ...categoriesItems.slice(categoryIndex + 1),
              ]
            : [...categoriesItems, updatedCategory],
      }
    }
    default:
      throw state
  }
}
