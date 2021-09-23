import React from 'react'
import { CardListItemInput } from './CardListItemInput'

type CardListCategoryProps = {
  categoryId: string
  title: string
  checkItemFn: (categoryId: string) => (item: string) => void
  removeItemFn: (categoryId: string) => (item: string) => void

  incrementItemQuantity: (categoryId: string) => (item: string) => void

  decrementItemQuantity: (categoryId: string) => (item: string) => void
  isEditModeToggled: Boolean
  items: {
    id: string
    name: string
    quantity: number
    checked: boolean
  }[]
}

export const CardListCategory: React.FC<CardListCategoryProps> = ({
  categoryId,
  title,
  items,
  isEditModeToggled,
  checkItemFn,
  removeItemFn,
  decrementItemQuantity,
  incrementItemQuantity,
}) => {
  return (
    <div className='card-list__category__container'>
      <h3>{title}</h3>
      <ul className='card-list__category__items'>
        {items.map(({ id, name: label, quantity, checked }) => (
          <li key={id} className='card-list__category__item'>
            <CardListItemInput
              checkItemFn={checkItemFn(categoryId)}
              checked={checked}
              isEditModeToggled={isEditModeToggled}
              label={label}
              itemId={id}
              onRemove={removeItemFn(categoryId)}
              onDecrement={decrementItemQuantity(categoryId)}
              onIncrement={incrementItemQuantity(categoryId)}
              value={quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
