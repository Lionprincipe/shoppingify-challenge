import React from 'react'
import { CardListItemInput } from './CardListItemInput'

type CardListCategoryProps = {
  categoryId: string
  title: string
  incrementItemQuantity: (categoryId: string) => (item: string) => void
  decrementItemQuantity: (categoryId: string) => (item: string) => void
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
  decrementItemQuantity,
  incrementItemQuantity,
}) => {
  return (
    <div className='card-list__category__container'>
      <h3>{title}</h3>
      <ul className='card-list__category__items'>
        {items.map(({ id, name: label, quantity }) => (
          <li key={id} className='card-list__category__item'>
            <span className='card-list__category__item__label'>{label}</span>
            <CardListItemInput
              itemId={id}
              decrementQuantity={decrementItemQuantity(categoryId)}
              incrementQuantity={incrementItemQuantity(categoryId)}
              value={quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
