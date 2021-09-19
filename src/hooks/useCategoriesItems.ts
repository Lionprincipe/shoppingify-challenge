import { useContext } from 'react'
import { CategoriesItemsContext } from '../contexts'
import { addItemToCategory } from '../contexts'

export const useCategoriesItems = () => {
  const { categoriesItems, dispatch } = useContext(CategoriesItemsContext)
  const addItem = addItemToCategory(dispatch)
  return { categoriesItems, addItem }
}
