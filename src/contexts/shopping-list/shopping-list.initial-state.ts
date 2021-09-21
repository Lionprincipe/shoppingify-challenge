import { createDataId } from '../../helpers/uuid-generator'
import { ShoppingListTypeContext } from './shopping-list.context'

export const initialState: Omit<ShoppingListTypeContext, 'dispatch'> = {
  shoppingList: {
    currentShoppingList: {},
    shoppingListHistory: [
      {
        id: createDataId(),
        name: 'Grocery List of the day of my das where all was what i was planning the day before',
        date: 'Mon 27.8.2020',
        status: 'completed',
        categories: [],
      },
      {
        id: createDataId(),
        name: 'Eero’s farewell party',
        date: 'Mon 24.8.2020',
        status: 'completed',
        categories: [],
      },
      {
        id: createDataId(),
        name: 'Board game week 2',
        date: 'Mon 27.10.2020',
        status: 'completed',
        categories: [],
      },
      {
        id: createDataId(),
        name: 'Grocery List',
        date: 'Mon 16.9.2020',
        status: 'cancelled',
        categories: [],
      },
    ],
  },
}
