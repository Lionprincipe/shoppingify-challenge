import { ModalDataType, RightSideBarScreenNames } from '../../types'

export enum UIActionsTypes {
  ADD_MODAL = 'ADD_MODAL',
  FLUSH_SIDEBAR_HISTORY = 'FLUSH_SIDEBAR_HISTORY',
  REMOVE_MODAL = 'REMOVE_MODAL',
  SHOW__ADD_ITEM_FORM = 'SHOW__ADD_ITEM_FORM',
  SHOW_ITEM_DETAILS = 'SHOW_ITEM_DETAILS',
  SHOW_CURRENT_SHOPPING_LIST = 'SHOW_CURRENT_SHOPPING_LIST',
  GO_BACK_SIDEBAR_HISTORY = 'GO_BACK_SIDEBAR_HISTORY',
}

interface FlushSidebarHistoryAction {
  type: UIActionsTypes.FLUSH_SIDEBAR_HISTORY
}

interface RemoveModalAction {
  type: UIActionsTypes.REMOVE_MODAL
  payload: number
}

interface AddModalAction {
  type: UIActionsTypes.ADD_MODAL
  payload: ModalDataType
}

interface ShowAddItemFormAction {
  type: UIActionsTypes.SHOW__ADD_ITEM_FORM
  payload: { screenName: RightSideBarScreenNames.ADD_ITEM }
}

interface ShowCurrentShoppingListAction {
  type: UIActionsTypes.SHOW_CURRENT_SHOPPING_LIST
  payload: { screenName: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST }
}
interface ShowItemDetailsAction {
  type: UIActionsTypes.SHOW_ITEM_DETAILS
  payload: {
    screenName: RightSideBarScreenNames.SHOW_ITEM_DETAILS
    options?: { categoryId: string; itemId: string }
  }
}

interface GoBackSideBarHistoryAction {
  type: UIActionsTypes.GO_BACK_SIDEBAR_HISTORY
}

export type UIActionType =
  | ShowCurrentShoppingListAction
  | GoBackSideBarHistoryAction
  | ShowItemDetailsAction
  | ShowAddItemFormAction
  | AddModalAction
  | RemoveModalAction
  | FlushSidebarHistoryAction
// export interface UIPayloadType {
//   screenName: RightSideBarScreenNames
//   options?: { categoryId: string; itemId: string }
// }

// export type UIDispatchType = React.Dispatch<{
//   type: UIActionsTypes
//   payload: UIPayloadType
// }>

export type UIDispatchType = React.Dispatch<UIActionType>
