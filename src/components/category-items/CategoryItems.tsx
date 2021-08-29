import React from 'react'

import './CategoryItems.style.css'
type CategoryItemsProps = {
  items: string[]
  title: string
}

export const CategoryItems: React.FC<CategoryItemsProps> = ({
  items,
  title,
}) => {
  return (
    <div className='category-container'>
      <h3 className='category-title'>{title}</h3>
      {items && (
        <ul className='category-list'>
          {items.map((item, index) => (
            <li key={item + index}>
              <button className='category-item'>
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
