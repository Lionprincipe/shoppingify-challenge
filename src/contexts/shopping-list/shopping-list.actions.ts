import { InputFieldsTypes } from '../../types'
import {
  ShoppingListActionsTypes,
  ShoppingListDispatchType,
} from './shopping-list.action-types'

export const addItemToCategory =
  (dispatch: ShoppingListDispatchType) => (item: InputFieldsTypes) =>
    dispatch({
      type: ShoppingListActionsTypes.EDIT_CURRENT_SHOPPING_LIST,
      payload: null,
    })

export type PayloadType = null
