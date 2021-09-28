import { createContext } from 'react'
import { ShoppingListStatus } from '../../types'
import { ShoppingListDispatchType } from './shopping-list.action-types'

export interface ShoppingListItemType {
  id: string
  name: string
  quantity: number
  checked: boolean
}
export interface ShoppingCategoryType {
  id: string
  title: string
  items: ShoppingListItemType[]
}

export interface ShoppingListType {
  createdAt: number
  completedAt?: number
  id: string
  name: string
  status: ShoppingListStatus
  date: string
  categories: ShoppingCategoryType[]
}

export interface ShoppingListStateType {
  currentShoppingList: ShoppingListType | null
  shoppingListHistory: ShoppingListType[]
}

export interface ShoppingListTypeContext {
  shoppingList: ShoppingListStateType
  dispatch: ShoppingListDispatchType
}

export const ShoppingListContext = createContext<ShoppingListTypeContext>({
  shoppingList: {
    currentShoppingList: null,
    shoppingListHistory: [],
  },
  dispatch: () => {},
})
