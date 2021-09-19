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

export type PayloadType = InputFieldsTypes
