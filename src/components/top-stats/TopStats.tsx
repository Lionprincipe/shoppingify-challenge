import React from 'react'
import { TopAccent } from '../../types'

import './TopStats.style.css'

type TopStatsProps = {
  title: string
  progressInfos: { label: string; value: number }[]
  colorAccent: TopAccent
  unit?: string
}

export const TopStats: React.FC<TopStatsProps> = ({
  title,
  progressInfos,
  colorAccent,
  unit,
}) => {
  return (
    <div className='top-stats__container'>
      <h2>{title}</h2>
      {progressInfos.length > 0 && (
        <ul>
          {progressInfos.map(({ label, value }) => (
            <li className='top-stats__item' key={label}>
              <div className='top-stats__progress'>
                <div className='top-stats__progress__title'>
                  <span>{label}</span>
                  <span>{`${value}${unit && '%'}`}</span>
                </div>
                <div
                  className={`top-stats__progress-bar top-stats__progress-bar--${colorAccent}`}
                >
                  <hr style={{ width: `${value}%` }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
