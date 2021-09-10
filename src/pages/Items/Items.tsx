import React from 'react'
import { CategoryItems } from '../../components'

import { items as data, brandLabel, headingText } from './Items.data'

import './Items.style.css'

export const ItemsPages = () => {
  return (
    <div className='items-container'>
      <header className='items-header'>
        <h2>
          <strong>{brandLabel}</strong> {headingText}
        </h2>
      </header>
      {data.map(({ title, items }, index) => (
        <CategoryItems items={items} title={title} key={index} />
      ))}
    </div>
  )
}
