import { InputFieldsTypes } from '../../types'
import {
  CategoriesItemsActionsTypes,
  CategoriesItemsDispatchType,
} from './categories-items.actions-type'

export const addItemToCategory =
  (dispatch: CategoriesItemsDispatchType) => (item: InputFieldsTypes) =>
    dispatch({
      type: CategoriesItemsActionsTypes.ADD_ITEM_TO_CATEGORY,
      payload: item,
    })

export const deleteItemInCategory =
  (dispatch: CategoriesItemsDispatchType) =>
  (itemId: string, categoryId: string) =>
    dispatch({
      type: CategoriesItemsActionsTypes.DELETE_ITEM_IN_CATEGORY,
      payload: { itemId, categoryId },
    })

export type PayloadType = InputFieldsTypes
