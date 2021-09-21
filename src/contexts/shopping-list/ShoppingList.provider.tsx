import React, { useReducer } from 'react'
import { initialState } from './shopping-list.initial-state'
import { ShoppingListContext } from './shopping-list.context'
import { shoppingListReducer } from './shopping-list.reducer'

export const ShoppingListProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingListReducer, initialState)
  return (
    <ShoppingListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShoppingListContext.Provider>
  )
}
