import { UIPayloadType } from '.'
import { UIContextType } from '../../contexts/UI/ui.context'
import { RightSideBarScreenNames } from '../../types'
import { UIActionsTypes } from './UI.actionType'

export function UIReducer(
  state: Omit<UIContextType, 'dispatch'>,
  action: { type: UIActionsTypes; payload: UIPayloadType }
) {
  const { type, payload } = action
  switch (type) {
    case UIActionsTypes.GO_BACK_SIDEBAR_HISTORY: {
      const { UI } = state
      return {
        ...state,
        UI: {
          ...UI,
          onScreenHistory: [...UI.onScreenHistory.slice(1)],
        },
      }
    }
    case UIActionsTypes.SHOW_CURRENT_SHOPPING_LIST: {
      const { UI } = state
      return {
        ...state,
        UI: {
          ...UI,
          onScreenHistory: [
            { screenName: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST },
            ...UI.onScreenHistory,
          ],
        },
      }
    }
    case UIActionsTypes.SHOW_ITEM_DETAILS: {
      const { UI } = state
      return {
        ...state,
        UI: {
          ...UI,
          onScreenHistory: [
            {
              screenName: RightSideBarScreenNames.SHOW_ITEM_DETAILS,
              options: payload.options,
            },
            ...UI.onScreenHistory,
          ],
        },
      }
    }
    case UIActionsTypes.SHOW__ADD_ITEM_FORM: {
      const { UI } = state
      return {
        ...state,
        UI: {
          ...UI,
          onScreenHistory: [
            { screenName: RightSideBarScreenNames.ADD_ITEM },
            ...UI.onScreenHistory,
          ],
        },
      }
    }

    default:
      return state
  }
}
