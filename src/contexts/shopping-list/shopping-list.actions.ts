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

export type ShoppingListPayloadType = {
  item: ShoppingListItemType
  categoryId: string
  categoryName: string
}
