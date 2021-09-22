import { ShoppingListItemType } from '.'

export enum ShoppingListActionsTypes {
  EDIT_CURRENT_SHOPPING_LIST = 'EDIT_CURRENT_SHOPPING_LIST',
  ADD_ITEM_TO_CURRENT_SHOPPING_LIST = 'ADD_ITEM_TO_CURRENT_SHOPPING_LIST',
  UPDATE_CURRENT_SHOPING_LIST_ITEM_QUANTITY = 'UPDATE_CURRENT_SHOPING_LIST_ITEM_QUANTITY',
}

interface AddItemToCurrentShoppingListAction {
  type: ShoppingListActionsTypes.ADD_ITEM_TO_CURRENT_SHOPPING_LIST
  payload: {
    item: ShoppingListItemType
    categoryId: string
    categoryName: string
  }
}

interface updateCurrentShoppingListItemQuantityAction {
  type: ShoppingListActionsTypes.UPDATE_CURRENT_SHOPING_LIST_ITEM_QUANTITY
  payload: { categoryId: string; itemId: string; increment?: number }
}
export type ActionType =
  | updateCurrentShoppingListItemQuantityAction
  | AddItemToCurrentShoppingListAction

export type ShoppingListDispatchType = React.Dispatch<ActionType>
