import { createContext } from 'react'

import { CategoriesItemsDispatchType } from './categories-items.actions-type'
import { CategoryItems } from '../../types'

export interface CategoriesItemsType {
  categoriesItems: CategoryItems[]
  dispatch: CategoriesItemsDispatchType
}
export const CategoriesItemsContext = createContext<CategoriesItemsType>({
  categoriesItems: [],
  dispatch: () => {},
})
