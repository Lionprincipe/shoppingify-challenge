import { ShoppingListTypeContext } from '.'
import { ShoppingListActionsTypes } from './shopping-list.action-types'
import { PayloadType } from './shopping-list.actions'

export function shoppingListReducer(
  state: Omit<ShoppingListTypeContext, 'dispatch'>,
  action: { type: ShoppingListActionsTypes; payload: PayloadType }
) {
  switch (action.type) {
    case ShoppingListActionsTypes.EDIT_CURRENT_SHOPPING_LIST: {
      return state
    }
    default:
      throw state
  }
}
