import { createContext } from 'react'

import { CategoriesItemsDispatchType } from './categories-items.actions-type'
import { CategoryItemsType } from '../../types'

export interface CategoriesItemsType {
  categoriesItems: CategoryItemsType[]
  dispatch: CategoriesItemsDispatchType
}
export const CategoriesItemsContext = createContext<CategoriesItemsType>({
  categoriesItems: [],
  dispatch: () => {},
})
