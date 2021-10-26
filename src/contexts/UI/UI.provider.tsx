import { useEffect, useReducer } from 'react'
import {
  setDesktopDefaultSideBarHistoryAction,
  setMobileDefaultSideBarHistoryAction,
} from '.'
import { UIContext, UIContextType } from '../../contexts/UI/ui.context'
import { useIsMobileSizeDetected } from '../../hooks/useIsMobileSizeDetected'
import { RightSideBarScreenNames } from '../../types'
import { UIReducer } from './UI.reducer'

const initialState: Omit<UIContextType, 'dispatch'> = {
  UI: {
    modals: [],
    onScreenHistory: [],
    onScreenDefault: RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST,
  },
}

export const UIProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, initialState)
  const isMobile = !!useIsMobileSizeDetected()
  useEffect(() => {
    const action = isMobile
      ? setMobileDefaultSideBarHistoryAction
      : setDesktopDefaultSideBarHistoryAction
    action(dispatch)()
  }, [isMobile])
  return (
    <UIContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UIContext.Provider>
  )
}
