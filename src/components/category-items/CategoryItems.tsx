import React from 'react'

import './CategoryItems.style.css'
type CategoryItemsProps = {
  items: { label: string; quantity?: string }[]
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
          {items.map(({ label, quantity }, index) => (
            <li key={label + index}>
              <button className='category-item'>
                <span className='category-item__label'>{label}</span>
                {quantity && (
                  <span className='category-item__quantity'>{quantity}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
