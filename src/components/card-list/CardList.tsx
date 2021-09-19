import React from 'react'
import { cardListData } from './CardList.data'
import { ReactComponent as CardEmptyHolder } from '../../assets/icons/card_holder.svg'
import { ReactComponent as AddItemIllustration } from '../../assets/icons/add_item_illustration.svg'

import './CardList.style.css'
import { CardListCategory } from './CardListCategory'

type CardListProps = {
  openAddItemForm: () => void
}

export const CardList: React.FC<CardListProps> = ({ openAddItemForm }) => {
  const { empty, currentList } = cardListData
  const isEmpty = false
  const { heading, categories } = currentList
  return (
    <div className='card-list__container'>
      <div className='card-list__add-item'>
        <span className='card-list__add-item__illustration'>
          <AddItemIllustration className='icon' />
        </span>

        <p className='card-list__add-item__text'>Didn’t find what you need?</p>
        <button onClick={openAddItemForm} className='card-list__add-item__btn'>
          Add Item
        </button>
      </div>
      {isEmpty ? (
        <>
          <p className='card-list__empty-message'>{empty.label}</p>
          <CardEmptyHolder className='card-list__illustration' />
        </>
      ) : (
        <div className='card-list__list-info'>
          <h2>{heading}</h2>

          {categories.map((category) => (
            <CardListCategory {...category} key={category.title} />
          ))}
        </div>
      )}
    </div>
  )
}
