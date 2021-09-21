import React from 'react'
import { useUIContext } from '../../hooks/useUIContext'
import { CategoryItemsType, RightSideBarScreenNames } from '../../types'

import './CategoryItems.style.css'

type CategoryItemsProps = {
  categoryId: string
  items: CategoryItemsType['items']
  title: string
}

export const CategoryItems: React.FC<CategoryItemsProps> = ({
  items,
  title,
  categoryId,
}) => {
  const { onShowItemDetails } = useUIContext()
  return (
    <div className='category-items__container'>
      <h3 className='category-items__title'>{title}</h3>
      {items && (
        <ul className='category-items__list'>
          {items.map(({ label, quantity, id: itemId }, index) => (
            <li
              className='category-items__list-item'
              key={`${categoryId}-${index}`}
              onClick={() =>
                onShowItemDetails(RightSideBarScreenNames.SHOW_ITEM_DETAILS, {
                  itemId,
                  categoryId,
                })
              }
            >
              <button className='category-items__btn'>
                <span className='category-items__label'>{label}</span>
                {quantity && (
                  <span className='category-items__quantity'>{quantity}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
