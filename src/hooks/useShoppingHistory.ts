import { useContext } from 'react'
import { ShoppingListContext } from '../contexts/shopping-list/shopping-list.context'

export const useShoppingHistory = () => {
  const { shoppingLists } = useContext(ShoppingListContext)
  return getMonthlyListHistory(shoppingLists)
}

function getMonthlyListHistory<T extends { date: string }>(
  shoppingLists: T[]
): { date: string; lists: T[] }[] {
  return shoppingLists.reduce<{ date: string; lists: T[] }[]>((acc, curr) => {
    const currentDate = formatCurrentDate(curr.date)
    if (acc.some((el: { date: string }) => el.date === currentDate)) {
      return acc
    } else {
      const lists = shoppingLists.filter(
        (shoppingList) => formatCurrentDate(shoppingList.date) === currentDate
      )
      return [...acc, { date: currentDate, lists }]
    }
  }, [])
}

function parseDateToInt(date: string) {
  const data = date.split('.')
  return {
    day: parseInt(data[data.length - 3]) || 1,
    month: parseInt(data[data.length - 2]),
    year: parseInt(data[data.length - 1]),
  }
}

function formatCurrentDate(date: string) {
  const { year, month, day } = parseDateToInt(date)
  const toDate = new Date(year, month - 1, day)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(toDate)
}
