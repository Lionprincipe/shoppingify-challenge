import { CategoryItems } from '../../components'
import { BackButton } from '../../components'
import { DateField } from '../../components/date-field/DateField'

import { heading, date, categoriesItems } from './History.data'
import './History.style.css'
export const HistoryPage = () => {
  return (
    <div className='history-container'>
      <header>
        <BackButton />
        <h2>{heading}</h2>
        <div className='history-date'>
          <DateField date={date} />
        </div>
      </header>
      {categoriesItems.map(({ title, items }) => (
        <CategoryItems title={title} items={items} key={title} />
      ))}
    </div>
  )
}
