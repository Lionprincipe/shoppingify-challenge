import { useContext } from 'react'
import { ShoppingListContext } from '../contexts'

export const useHistoryDetails = (historyId: string) => {
  const { shoppingList } = useContext(ShoppingListContext)
  const history = shoppingList.shoppingListHistory.find(
    (el) => el.id === historyId
  )
  return history
}
