import { createContext } from 'react'
import { UIDispatchType } from './UI.actionType'
import { RightSideBarScreenNames } from '../../types'

interface OnScreenHistoryType {
  screenName: RightSideBarScreenNames
  options?: { categoryId: string; itemId: string }
}

export interface UIContextType {
  UI: {
    onScreenHistory: OnScreenHistoryType[]
    onScreenDefault: RightSideBarScreenNames
  }
  dispatch: UIDispatchType
}

export const UIContext = createContext<UIContextType>({
  UI: {
    onScreenHistory: [],
    onScreenDefault: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST,
  },
  dispatch: () => {},
})
