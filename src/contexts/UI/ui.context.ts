import { createContext } from 'react'
import { UIDispatchType } from './UI.actionType'
import { ModalDataType, RightSideBarScreenNames } from '../../types'

interface OnScreenHistoryType {
  screenName: RightSideBarScreenNames
  options?: { categoryId: string; itemId: string }
}

export interface UIContextType {
  UI: {
    modals: ModalDataType[]
    onScreenHistory: OnScreenHistoryType[]
    onScreenDefault: RightSideBarScreenNames | null
  }
  dispatch: UIDispatchType
}

export const UIContext = createContext<UIContextType>({
  UI: {
    modals: [],
    onScreenHistory: [],
    onScreenDefault: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST,
  },
  dispatch: () => {},
})
