import produce from 'immer'
import { UIContextType } from '../../contexts/UI/ui.context'
import { RightSideBarScreenNames } from '../../types'
import { UIActionsTypes, UIActionType } from './UI.actionType'

export const UIReducer = produce(
  (state: Omit<UIContextType, 'dispatch'>, action: UIActionType) => {
    switch (action.type) {
      case UIActionsTypes.ADD_MODAL: {
        state.UI.modals.unshift(action.payload)
        break
      }
      case UIActionsTypes.REMOVE_MODAL: {
        if (action.payload && action.payload > -1) {
          state.UI.modals.splice(action.payload, 1)
        } else {
          state.UI.modals.shift()
        }
        break
      }
      case UIActionsTypes.FLUSH_SIDEBAR_HISTORY: {
        state.UI.onScreenHistory = []
        break
      }
      case UIActionsTypes.GO_BACK_SIDEBAR_HISTORY: {
        state.UI.onScreenHistory.shift()
        break
      }
      case UIActionsTypes.SHOW_CURRENT_SHOPPING_LIST: {
        state.UI.onScreenHistory.unshift({
          screenName: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST,
        })
        break
      }
      case UIActionsTypes.SHOW_ITEM_DETAILS: {
        const { options } = action.payload
        const itemHistoryIndex = state.UI.onScreenHistory.findIndex(
          (el) =>
            el.screenName === RightSideBarScreenNames.SHOW_ITEM_DETAILS &&
            el.options?.categoryId === options?.categoryId &&
            el.options?.itemId === options?.itemId
        )
        if (itemHistoryIndex > -1) {
          state.UI.onScreenHistory.splice(itemHistoryIndex, 1)
        }
        state.UI.onScreenHistory.unshift({
          screenName: RightSideBarScreenNames.SHOW_ITEM_DETAILS,
          options,
        })
        break
      }
      case UIActionsTypes.SHOW__ADD_ITEM_FORM: {
        state.UI.onScreenHistory.unshift({
          screenName: RightSideBarScreenNames.ADD_ITEM,
        })
        break
      }
      case UIActionsTypes.SET_MOBILE_DEFAULT_SIDEBAR_HISTORY: {
        state.UI.onScreenDefault = null
        break
      }
      case UIActionsTypes.SET_DESKTOP_DEFAULT_SIDEBAR_HISTORY: {
        state.UI.onScreenDefault =
          RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST
        break
      }

      default:
        return state
    }
  }
)
