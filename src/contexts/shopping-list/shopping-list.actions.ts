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
      type: ShoppingListActionsTypes.UPDATE_CURRENT_SHOPING_LIST_ITEM_QUANTITY,
      payload: { categoryId, itemId, increment },
    })
