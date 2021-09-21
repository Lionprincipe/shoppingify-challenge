import React, { useReducer } from 'react'

import { CategoriesItemsContext } from '../../contexts/categories-items/categories-items.context'
import { initialState } from './categories-items.data'

import { categoriesItemsReducer } from './categories-items.reducer'

export const CategoriesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesItemsReducer, initialState)
  return (
    <CategoriesItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CategoriesItemsContext.Provider>
  )
}
