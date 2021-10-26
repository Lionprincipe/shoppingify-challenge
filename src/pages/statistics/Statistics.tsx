import React from 'react'
import { MonthCharts } from '../../components/mounthly-charts/MonthCharts'

import { TopStats } from '../../components/top-stats/TopStats'

import { Ipage } from '../../types'

import { monthlySummary, statsData } from './Statistics.data'

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
      <div className='stats__monthly-container'>
        {monthlySummary && (
          <>
            <h2>{monthlySummary.headerText}</h2>
            <div className='stats__monthly-charts'>
              <MonthCharts
                strockColor={monthlySummary.strockColor}
                fillColor={monthlySummary.fillColor}
                data={monthlySummary.data}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
