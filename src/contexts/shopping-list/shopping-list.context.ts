import { createContext } from 'react'
import { ShoppingListDispatchType } from './shopping-list.action-types'

export interface ShoppingListType {
  id: string
  name: string
  status: 'cancelled' | 'completed' | 'on going'
  date: string
  categories: {
    id: string
    title: string
    items: {
      id: string
      name: string
      quantity: number
      checked: boolean
    }[]
  }[]
}

export interface ShoppingListStateType {
  currentShoppingList: ShoppingListType | {}
  shoppingListHistory: ShoppingListType[]
}

export interface ShoppingListTypeContext {
  shoppingList: ShoppingListStateType
  dispatch: ShoppingListDispatchType
}

export const ShoppingListContext = createContext<ShoppingListTypeContext>({
  shoppingList: { currentShoppingList: {}, shoppingListHistory: [] },
  dispatch: () => {},
})
