import React, { useState } from 'react'
import {
  ShoppingListContext,
  ShoppingListItem,
  ShoppingListType,
} from './shopping-list.context'
import { createDataId } from '../../helpers/uuid-generator'

const defaultShoppingLists: ShoppingListItem[] = [
  {
    id: createDataId(),
    title:
      'Grocery List of the day of my das where all was what i was planning the day before',
    date: 'Mon 27.8.2020',
    status: 'completed',
  },
  {
    id: createDataId(),
    title: 'Eero’s farewell party',
    date: 'Mon 24.8.2020',
    status: 'completed',
  },

  {
    id: createDataId(),
    title: 'Board game week 2',
    date: 'Mon 27.10.2020',
    status: 'completed',
  },
  {
    id: createDataId(),
    title: 'Grocery List',
    date: 'Mon 16.9.2020',
    status: 'cancelled',
  },
]

export const ShoppingListProvider: React.FC = ({ children }) => {
  const [shoppingLists] =
    useState<ShoppingListType['shoppingLists']>(defaultShoppingLists)
  return (
    <ShoppingListContext.Provider value={{ shoppingLists }}>
      {children}
    </ShoppingListContext.Provider>
  )
}
