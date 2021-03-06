import React from 'react'

import { HistoryGroup } from '../../components'
import { useShoppingListContext } from '../../hooks/useShoppingListContext'

import { Ipage } from '../../types'

import { heading } from './Histories.data'

import './Histories.style.css'

export const HistoriesPage: React.FunctionComponent<Ipage> = () => {
  const { listInfos } = useShoppingListContext()
  return (
    <div className='histories-wrapper'>
      <h2 className='histories-heading'>{heading}</h2>
      {listInfos.map(({ date, lists }, index) => (
        <HistoryGroup title={date} records={lists} key={date + index} />
      ))}
    </div>
  )
}
