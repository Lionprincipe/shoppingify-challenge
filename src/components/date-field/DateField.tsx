import { ReactComponent as EventIcon } from '../../assets/icons/event_note.svg'

import './DateField.style.css'

type DateFieldProps = { date: string; className?: string }
export const DateField: React.FC<DateFieldProps> = ({
  date,
  className = '',
}) => {
  return (
    <span className={`date-field ${className} `}>
      <EventIcon className='icon' />
      {date}
    </span>
  )
}
