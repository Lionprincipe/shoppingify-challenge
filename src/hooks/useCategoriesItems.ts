import { useContext } from 'react'
import { CategoriesItemsContext, deleteItemInCategory } from '../contexts'
import { addItemToCategory } from '../contexts'

export const useCategoriesItems = () => {
  const { categoriesItems, dispatch } = useContext(CategoriesItemsContext)
  const addItem = addItemToCategory(dispatch)
  const deleteItem = deleteItemInCategory(dispatch)
  return { categoriesItems, addItem, deleteItem }
}
