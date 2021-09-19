import { RightSideBarScreenNames } from '../../types'

export enum UIActionsTypes {
  SHOW__ADD_ITEM_FORM = 'SHOW__ADD_ITEM_FORM',
  SHOW_ITEM_DETAILS = 'SHOW_ITEM_DETAILS',
  SHOW_CURRENT_SHOPPING_LIST = 'SHOW_CURRENT_SHOPPING_LIST',
  GO_BACK_SIDEBAR_HISTORY = 'GO_BACK_SIDEBAR_HISTORY',
}

export type UIDispatchType = React.Dispatch<{
  type: UIActionsTypes
  payload: RightSideBarScreenNames
}>
