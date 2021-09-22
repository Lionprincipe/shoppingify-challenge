import { ShoppingListPayloadType } from './shopping-list.actions'

export enum ShoppingListActionsTypes {
  EDIT_CURRENT_SHOPPING_LIST = 'EDIT_CURRENT_SHOPPING_LIST',
  ADD_ITEM_TO_CURRENT_SHOPPING_LIST = 'ADD_ITEM_TO_CURRENT_SHOPPING_LIST',
}

export type ShoppingListDispatchType = React.Dispatch<{
  type: ShoppingListActionsTypes
  payload: ShoppingListPayloadType
}>
