import produce from 'immer'
import { UIPayloadType } from '.'
import { UIContextType } from '../../contexts/UI/ui.context'
import { RightSideBarScreenNames } from '../../types'
import { UIActionsTypes } from './UI.actionType'

export const UIReducer = produce(
  (
    state: Omit<UIContextType, 'dispatch'>,
    action: { type: UIActionsTypes; payload: UIPayloadType }
  ) => {
    const { type, payload } = action
    switch (type) {
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
        state.UI.onScreenHistory.unshift({
          screenName: RightSideBarScreenNames.SHOW_ITEM_DETAILS,
          options: payload.options,
        })
        break
      }
      case UIActionsTypes.SHOW__ADD_ITEM_FORM: {
        state.UI.onScreenHistory.unshift({
          screenName: RightSideBarScreenNames.ADD_ITEM,
        })
        break
      }

      default:
        return state
    }
  }
)
