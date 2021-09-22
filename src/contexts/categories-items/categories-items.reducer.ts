import produce from 'immer'
import { CategoriesItemsType } from '../../contexts/categories-items/categories-items.context'
import { getRandomImageFromUnplashUrl } from '../../helpers/image-url'
import { createDataId } from '../../helpers/uuid-generator'
import { ListItem } from '../../types'
import { PayloadType } from './categories-items.actions'
import { CategoriesItemsActionsTypes } from './categories-items.actions-type'

export const categoriesItemsReducer = produce(
  (
    state: Omit<CategoriesItemsType, 'dispatch'>,
    action: { type: CategoriesItemsActionsTypes; payload: PayloadType }
  ) => {
    switch (action.type) {
      case CategoriesItemsActionsTypes.ADD_ITEM_TO_CATEGORY: {
        const { name, category, imageUrl = '', note = '' } = action.payload
        const newItem: ListItem = {
          id: createDataId(),
          label: name,
          imageUrl: imageUrl || getRandomImageFromUnplashUrl(name),
          note,
        }
        const categories = state.categoriesItems
        const categoryIndex = categories.findIndex(
          (categories) => categories.title === category
        )
        if (categoryIndex > -1) {
          categories[categoryIndex].items.push(newItem)
        } else {
          categories.push({
            title: category,
            id: createDataId(),
            items: [newItem],
          })
        }
        break
      }
      default:
        throw state
    }
  }
)
