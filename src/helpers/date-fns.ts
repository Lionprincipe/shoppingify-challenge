export function formatStringDateToDateTimeStamp(date: string) {
  const { year, month, day } = parseDateToInt(date)
  return new Date(year, month - 1, day).getTime()
}

export function parseDateToInt(date: string) {
  const data = date.split('.')
  return {
    day: parseInt(data[data.length - 3]) || 1,
    month: parseInt(data[data.length - 2]) || 0,
    year: parseInt(data[data.length - 1]) || 0,
  }
}

export function fromTimeStampToDateString(timestamp: number) {
  const date = new Date(timestamp)
  const [weekday, month, day, year] = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    day: 'numeric',
    year: 'numeric',
    month: 'numeric',
  })
    .format(date)
    .split(/[,]|\//)

  return `${weekday.trim()} ${day.trim()}.${month.trim()}.${year.trim()}`
}

export function formatCurrentDate(date: string) {
  const { year, month, day } = parseDateToInt(date)
  const toDate = new Date(year, month - 1, day)
  return new Intl.DateTimeFormat('en-EN', {
    month: 'long',
    year: 'numeric',
  }).format(toDate)
}
