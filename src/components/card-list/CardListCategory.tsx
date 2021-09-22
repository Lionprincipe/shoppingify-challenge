import React from 'react'
import { CardListItemInput } from './CardListItemInput'

type CardListCategoryProps = {
  title: string
  items: {
    id: string
    name: string
    quantity: number
    checked: boolean
  }[]
}

export const CardListCategory: React.FC<CardListCategoryProps> = ({
  title,
  items,
}) => {
  return (
    <div className='card-list__category__container'>
      <h3>{title}</h3>
      <ul className='card-list__category__items'>
        {items.map(({ id, name: label, quantity }) => (
          <li key={id} className='card-list__category__item'>
            <span className='card-list__category__item__label'>{label}</span>
            <CardListItemInput value={quantity} />
          </li>
        ))}
      </ul>
    </div>
  )
}
