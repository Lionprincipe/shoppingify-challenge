import { Link } from 'react-router-dom'
import { ReactComponent as ForwardIcon } from '../../assets/icons/arrow-forward.svg'
import { DateField } from '../date-field/DateField'

import './HistoryGroup.style.css'

type HistoryGroupProps = {
  title: string
  records: {
    id: string
    name: string
    date: string
    status: string
  }[]
}

export const HistoryGroup: React.FC<HistoryGroupProps> = ({
  records,
  title,
}) => {
  return (
    <div className='history-group__container'>
      <h3>{title}</h3>
      {records.map(({ id, name, date, status }) => (
        <Link to={`./histories/${id}`} className='history-group__link' key={id}>
          <span className='history-group__title'>{name}</span>
          <DateField date={date} className='history-group__date' />

          <span
            className={`history-group__flag history-group__flag--${status.toLowerCase()}`}
          >
            {status}
          </span>

          <span className='forward-illustration'>
            <ForwardIcon className='icon' />
          </span>
        </Link>
      ))}
    </div>
  )
}
