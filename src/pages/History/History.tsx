import { RouteComponentProps, useParams } from 'react-router-dom'
import { CategoryItems } from '../../components'
import { BackButton } from '../../components'
import { DateField } from '../../components/date-field/DateField'
import { useHistoryDetails } from '../../hooks/useHistoryDetails'
import { Ipage } from '../../types'

import './History.style.css'

export const HistoryPage: React.FunctionComponent<
  Ipage & RouteComponentProps<any>
> = () => {
  let { id } = useParams<{ id: string }>()
  const historyData = useHistoryDetails(id)

  return !!historyData ? (
    <div className='history-container'>
      <header>
        <BackButton to='/histories' />
        <h2>{historyData.name}</h2>
        <div className='history-date'>
          <DateField date={historyData.date} />
        </div>
      </header>
      {historyData.categories.map(({ id: categoryId, title, items }) => (
        <CategoryItems
          categoryId={categoryId}
          title={title}
          items={items}
          key={categoryId}
        />
      ))}
    </div>
  ) : (
    <div>params not found</div>
  )
}
