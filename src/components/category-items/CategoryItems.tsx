import React from 'react'
import { ShoppingListItemType } from '../../contexts'
import { useUIContext } from '../../hooks/useUIContext'
import { ListItem, RightSideBarScreenNames } from '../../types'

import './CategoryItems.style.css'

type CategoryItemsProps = {
  categoryId: string
  items: ListItem[] | ShoppingListItemType[]
  title: string
}

function getTextFromItem<
  T extends { label: string },
  K extends { name: string }
>(contact: K | T) {
  if ('label' in contact) {
    return contact.label
  } else {
    return contact.name
  }
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
          {items.map(({ quantity, id: itemId, ...others }, index) => (
            <li
              className='category-items__list-item'
              key={itemId}
              onClick={() =>
                onShowItemDetails(RightSideBarScreenNames.SHOW_ITEM_DETAILS, {
                  itemId,
                  categoryId,
                })
              }
            >
              <button className='category-items__btn'>
                <span className='category-items__label'>
                  {getTextFromItem(others)}
                </span>
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
