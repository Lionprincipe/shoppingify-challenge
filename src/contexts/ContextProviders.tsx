import React from 'react'
import { CategoriesProvider } from './categories-items'
import { ShoppingListProvider } from './shopping-list'

import { UIProvider } from './UI'

export const ContextProviders: React.FC = ({ children }) => {
  return (
    <UIProvider>
      <ShoppingListProvider>
        <CategoriesProvider>{children}</CategoriesProvider>
      </ShoppingListProvider>
    </UIProvider>
  )
}
