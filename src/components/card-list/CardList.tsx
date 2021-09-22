import React from 'react'

import { ReactComponent as CardEmptyHolder } from '../../assets/icons/card_holder.svg'
import { ReactComponent as AddItemIllustration } from '../../assets/icons/add_item_illustration.svg'

import './CardList.style.css'
import { CardListCategory } from './CardListCategory'
import { useShoppingHistory } from '../../hooks/useShoppingHistory'

type CardListProps = {
  openAddItemForm: () => void
}

const EMPTY_CARD_DATA_LABEL = 'No items'

export const CardList: React.FC<CardListProps> = ({ openAddItemForm }) => {
  const { incrementItemQuantity, decrementItemQuantity, currentShoppingList } =
    useShoppingHistory()

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
      {!currentShoppingList ? (
        <>
          <p className='card-list__empty-message'>{EMPTY_CARD_DATA_LABEL}</p>
          <CardEmptyHolder className='card-list__illustration' />
        </>
      ) : (
        <div className='card-list__list-info'>
          <h2>{currentShoppingList.name}</h2>
          {currentShoppingList.categories &&
            currentShoppingList.categories.map((category) => (
              <CardListCategory
                categoryId={category.id}
                incrementItemQuantity={(categoryId) => (itemId) =>
                  incrementItemQuantity(categoryId, itemId)}
                decrementItemQuantity={(categoryId) => (itemId) =>
                  decrementItemQuantity(categoryId, itemId)}
                {...category}
                key={category.id}
              />
            ))}
        </div>
      )}
    </div>
  )
}
