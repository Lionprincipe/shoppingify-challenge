import { createContext } from 'react'

export interface ShoppingListItem {
  id: string
  date: string
  title: string
  status: 'completed' | 'ongoing' | 'cancelled'
}

export interface ShoppingListType {
  shoppingLists: ShoppingListItem[]
  addShoppingList?: () => void
  updateShoppingList?: () => void
  removeShoppingList?: () => void
  deleteShoppingList?: () => void
}

export const ShoppingListContext = createContext<ShoppingListType>({
  shoppingLists: [],
})
