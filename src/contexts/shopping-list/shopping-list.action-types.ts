import { ShoppingListItemType } from '.'

export enum ShoppingListActionsTypes {
  ADD_ITEM_TO_CURRENT_SHOPPING_LIST = 'ADD_ITEM_TO_CURRENT_SHOPPING_LIST',
  EDIT_CURRENT_SHOPPING_LIST_NAME = 'EDIT_CURRENT_SHOPPING_LIST_NAME',
  UPDATE_CURRENT_SHOPPING_LIST_ITEM_QUANTITY = 'UPDATE_CURRENT_SHOPPING_LIST_ITEM_QUANTITY',
  REMOVE_ITEM_FROM_CURRENT_SHOPPING_LIST = 'REMOVE_ITEM_FROM_CURRENT_SHOPPING_LIST',
  TOGGLE_CHECKED_ITEM_IN_CURRENT_SHOPPING_LIST_ITEM = 'TOGGLE_CHECKED_ITEM_IN_CURRENT_SHOPPING_LIST_ITEM ',
}

interface AddItemToCurrentShoppingListAction {
  type: ShoppingListActionsTypes.ADD_ITEM_TO_CURRENT_SHOPPING_LIST
  payload: {
    item: ShoppingListItemType
    categoryId: string
    categoryName: string
  }
}

interface UpdateCurrentShoppingListItemQuantityAction {
  type: ShoppingListActionsTypes.UPDATE_CURRENT_SHOPPING_LIST_ITEM_QUANTITY
  payload: { categoryId: string; itemId: string; increment?: number }
}

interface RemoveItemFromCurrentShoppingListAction {
  type: ShoppingListActionsTypes.REMOVE_ITEM_FROM_CURRENT_SHOPPING_LIST
  payload: { categoryId: string; itemId: string }
}

interface ToggleCheckedItemInCurrentShoppingListItemAction {
  type: ShoppingListActionsTypes.TOGGLE_CHECKED_ITEM_IN_CURRENT_SHOPPING_LIST_ITEM
  payload: { categoryId: string; itemId: string }
}

interface EditCurrentShoppingListNameAction {
  type: ShoppingListActionsTypes.EDIT_CURRENT_SHOPPING_LIST_NAME
  payload: { name: string }
}

export type ActionType =
  | UpdateCurrentShoppingListItemQuantityAction
  | AddItemToCurrentShoppingListAction
  | RemoveItemFromCurrentShoppingListAction
  | ToggleCheckedItemInCurrentShoppingListItemAction
  | EditCurrentShoppingListNameAction

export type ShoppingListDispatchType = React.Dispatch<ActionType>
