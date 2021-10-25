import produce from 'immer'

import { CategoriesItemsType } from '../../contexts/categories-items/categories-items.context'

import { getRandomImageFromUnplashUrl } from '../../helpers/image-url'
import { createDataId } from '../../helpers/uuid-generator'

import { ListItem } from '../../types'

import {
  CategoriesItemsActionType,
  CategoriesItemsActionsTypes,
} from './categories-items.actions-type'

export const categoriesItemsReducer = produce(
  (
    state: Omit<CategoriesItemsType, 'dispatch'>,
    action: CategoriesItemsActionType
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
      case CategoriesItemsActionsTypes.DELETE_ITEM_IN_CATEGORY: {
        const categoryIndex = state.categoriesItems.findIndex(
          (category) => category.id === action.payload.categoryId
        )
        if (categoryIndex < 0) break

        const category = state.categoriesItems[categoryIndex]
        const itemIndex = category.items.findIndex(
          (item) => item.id === action.payload.itemId
        )
        if (itemIndex >= 0) {
          category.items.splice(itemIndex, 1)
          if (category.items.length === 0) {
            state.categoriesItems.splice(categoryIndex)
          }
        }
        break
      }
      default:
        return state
    }
  }
)
