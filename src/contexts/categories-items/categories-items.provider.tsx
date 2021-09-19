import React, { useReducer } from 'react'

import { CategoriesItemsContext } from '../../contexts/categories-items/categories-items.context'
import { createDataId } from '../../helpers/uuid-generator'
import { categoriesItemsReducer } from './categories-items.reducer'

const initialState = {
  categoriesItems: [
    {
      id: createDataId(),
      title: 'Fruit and vegetables',
      items: [
        { label: 'avocado' },
        { label: ' banana' },
        { label: 'Bunch of carrots 5pcs' },
        { label: 'Potatoes 1kg' },
        { label: ' precooked corn 450g' },
        { label: 'Mandarin Nadorcott' },
        { label: 'Piele De Sapo Melon' },
        { label: 'Watermelon' },
      ],
    },
    {
      id: createDataId(),
      title: 'Fruit and vegetables',
      items: [
        { label: 'avocado' },
        { label: ' banana' },
        { label: 'Bunch of carrots 5pcs' },
        { label: 'Potatoes 1kg' },
        { label: ' precooked corn 450g' },
        { label: 'Mandarin Nadorcott' },
        { label: 'Piele De Sapo Melon' },
        { label: 'Watermelon' },
      ],
    },
    {
      id: createDataId(),
      title: 'Beverages',
      items: [
        { label: 'Coke zero' },
        { label: 'Lamate 60 cl' },
        { label: ' Heineken 33cl' },
        { label: 'Orange juice 1l' },
        { label: 'Limonade 1l' },
        { label: 'Ice tee 1l' },
        { label: 'Tonic 1l' },
        { label: 'Sangria 1l' },
      ],
    },
    {
      id: createDataId(),
      title: 'Meat and Fish',
      items: [
        { label: 'Chicken leg box' },
        { label: ' Chicken 1kg' },
        { label: ' Pork fillets 450g' },
        { label: ' Salmon 1kg' },
      ],
    },
  ],
}

export const CategoriesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesItemsReducer, initialState)
  return (
    <CategoriesItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CategoriesItemsContext.Provider>
  )
}
