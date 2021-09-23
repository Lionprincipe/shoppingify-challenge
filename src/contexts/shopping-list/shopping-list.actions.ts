import { ShoppingListItemType } from '.'
import {
  ShoppingListActionsTypes,
  ShoppingListDispatchType,
} from './shopping-list.action-types'

export const addItemToCurrentShoppingList =
  (dispatch: ShoppingListDispatchType) =>
  (
    item: ShoppingListItemType,
    category: { categoryId: string; categoryName: string }
  ) =>
    dispatch({
      type: ShoppingListActionsTypes.ADD_ITEM_TO_CURRENT_SHOPPING_LIST,
      payload: { item, ...category },
    })

export const updateCurrentShoppingListItemQuantity =
  (dispatch: ShoppingListDispatchType) =>
  (categoryId: string, itemId: string, increment?: number) =>
    dispatch({
      type: ShoppingListActionsTypes.UPDATE_CURRENT_SHOPPING_LIST_ITEM_QUANTITY,
      payload: { categoryId, itemId, increment },
    })

export const removeItemFromCurrentShoppingList =
  (dispatch: ShoppingListDispatchType) =>
  (categoryId: string, itemId: string) =>
    dispatch({
      type: ShoppingListActionsTypes.REMOVE_ITEM_FROM_CURRENT_SHOPPING_LIST,
      payload: { categoryId, itemId },
    })

export const toggleCheckedItemInCurrentShoppingListItem =
  (dispatch: ShoppingListDispatchType) =>
  (categoryId: string, itemId: string) =>
    dispatch({
      type: ShoppingListActionsTypes.TOGGLE_CHECKED_ITEM_IN_CURRENT_SHOPPING_LIST_ITEM,
      payload: { categoryId, itemId },
    })

export const editCurrentShoppingListName =
  (dispatch: ShoppingListDispatchType) => (name: string) =>
    dispatch({
      type: ShoppingListActionsTypes.EDIT_CURRENT_SHOPPING_LIST_NAME,
      payload: { name },
    })
