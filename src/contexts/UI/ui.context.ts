import { createContext } from 'react'
import { UIDispatchType } from './UI.actionType'
import { RightSideBarScreenNames } from '../../types'

export interface UIContextType {
  UI: {
    onScreenHistory: RightSideBarScreenNames[]
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
