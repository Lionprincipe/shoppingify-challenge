import { ModalDataType, RightSideBarScreenNames } from '../../types'
import { UIActionsTypes, UIDispatchType } from './UI.actionType'

export const addModal =
  (dispatch: UIDispatchType) => (payload: ModalDataType) =>
    dispatch({ type: UIActionsTypes.ADD_MODAL, payload })

export const removeModal =
  (dispatch: UIDispatchType) =>
  (payload: number = -1) =>
    dispatch({ type: UIActionsTypes.REMOVE_MODAL, payload })

export const showCurrentShoppingList =
  (dispatch: UIDispatchType) =>
  (screenName: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST) =>
    dispatch({
      type: UIActionsTypes.SHOW_CURRENT_SHOPPING_LIST,
      payload: { screenName },
    })

export const showItemDetails =
  (dispatch: UIDispatchType) =>
  (
    screenName: RightSideBarScreenNames.SHOW_ITEM_DETAILS,
    options: { categoryId: string; itemId: string }
  ) =>
    dispatch({
      type: UIActionsTypes.SHOW_ITEM_DETAILS,
      payload: { screenName, options },
    })

export const showAddItemForm =
  (dispatch: UIDispatchType) =>
  (screenName: RightSideBarScreenNames.ADD_ITEM) => {
    return dispatch({
      type: UIActionsTypes.SHOW__ADD_ITEM_FORM,
      payload: { screenName },
    })
  }

export const goBackSideBarHistory = (dispatch: UIDispatchType) => () => {
  return dispatch({
    type: UIActionsTypes.GO_BACK_SIDEBAR_HISTORY,
  })
}
