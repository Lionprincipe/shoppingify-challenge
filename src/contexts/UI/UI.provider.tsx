import { useReducer } from 'react'
import { UIContext, UIContextType } from '../../contexts/UI/ui.context'
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
  return (
    <UIContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UIContext.Provider>
  )
}
