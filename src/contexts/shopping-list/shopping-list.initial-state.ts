import { formatStringDateToDateTimeStamp } from '../../helpers/date-fns'
import { createDataId } from '../../helpers/uuid-generator'
import { ShoppingListStatus } from '../../types'
import { ShoppingListTypeContext } from './shopping-list.context'

export const initialState: Omit<ShoppingListTypeContext, 'dispatch'> = {
  shoppingList: {
    currentShoppingList: null,
    shoppingListHistory: [
      {
        createdAt: formatStringDateToDateTimeStamp('Mon 27.8.2020'),
        completedAt: formatStringDateToDateTimeStamp('Mon 28.8.2020'),
        id: createDataId(),
        name: 'Grocery List of the day of my das where all was what i was planning the day before',
        date: 'Mon 27.8.2020',
        status: ShoppingListStatus.COMPLETE,
        categories: [],
      },
      {
        id: createDataId(),
        createdAt: formatStringDateToDateTimeStamp('Mon 24.8.2020'),
        completedAt: formatStringDateToDateTimeStamp('Mon 25.8.2020'),
        name: 'Eero’s farewell party',
        date: 'Mon 24.8.2020',
        status: ShoppingListStatus.COMPLETE,
        categories: [],
      },
      {
        id: createDataId(),
        createdAt: formatStringDateToDateTimeStamp('Mon 24.8.2020'),
        completedAt: formatStringDateToDateTimeStamp('Mon 25.8.2020'),
        name: 'Board game week 2',
        date: 'Mon 27.10.2020',
        status: ShoppingListStatus.COMPLETE,
        categories: [],
      },
      {
        id: createDataId(),
        createdAt: formatStringDateToDateTimeStamp('Mon 24.8.2020'),
        completedAt: formatStringDateToDateTimeStamp('Mon 25.8.2020'),
        name: 'Grocery List',
        date: 'Mon 16.9.2020',
        status: ShoppingListStatus.CANCELLED,
        categories: [],
      },
    ],
  },
}
