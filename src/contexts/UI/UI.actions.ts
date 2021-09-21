import { RightSideBarScreenNames } from '../../types'
import { UIActionsTypes, UIDispatchType } from './UI.actionType'

export const showCurrentShoppingList =
  (dispatch: UIDispatchType) => (screenName: RightSideBarScreenNames) =>
    dispatch({
      type: UIActionsTypes.SHOW_CURRENT_SHOPPING_LIST,
      payload: { screenName },
    })

export const showItemDetails =
  (dispatch: UIDispatchType) =>
  (
    screenName: RightSideBarScreenNames,
    options: { categoryId: string; itemId: string }
  ) =>
    dispatch({
      type: UIActionsTypes.SHOW_ITEM_DETAILS,
      payload: { screenName, options },
    })

export const showAddItemForm =
  (dispatch: UIDispatchType) => (screenName: RightSideBarScreenNames) => {
    return dispatch({
      type: UIActionsTypes.SHOW__ADD_ITEM_FORM,
      payload: { screenName },
    })
  }

export const goBackSideBarHistory =
  (dispatch: UIDispatchType) => (screenName: RightSideBarScreenNames) => {
    return dispatch({
      type: UIActionsTypes.GO_BACK_SIDEBAR_HISTORY,
      payload: { screenName },
    })
  }