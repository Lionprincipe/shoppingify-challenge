function descendingComparator<T>(
  a: T,
  b: T,
  orderBy: keyof T,
  formater?: (value: any) => number | string
) {
  const aValue = !!formater ? formater(a[orderBy]) : a[orderBy]
  const bValue = !!formater ? formater(b[orderBy]) : b[orderBy]

  if (bValue < aValue) {
    return -1
  }
  if (bValue > aValue) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
  formater?: (value: any) => number | string
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy, formater)
    : (a, b) => -descendingComparator(a, b, orderBy, formater)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}
