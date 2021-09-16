import React from 'react'

import { TopStats } from '../../components/top-stats/TopStats'

import { Ipage } from '../../types'

import { statsData } from './Statistics.data'

import './Statistics.style.css'

export const StatisticsPage: React.FunctionComponent<Ipage> = () => {
  return (
    <div className='stats-container'>
      <div className='stats__top-container'>
        {statsData &&
          statsData.map(({ progressInfos, title, accent, unit }) => (
            <div className='stats__top-item' key={title}>
              <TopStats
                title={title}
                colorAccent={accent}
                unit={unit}
                progressInfos={progressInfos}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
