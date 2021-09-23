import React, { useState } from 'react'

import { ReactComponent as CardEmptyHolder } from '../../assets/icons/card_holder.svg'

import { useShoppingListContext } from '../../hooks/useShoppingListContext'

import { CardListCategory } from './CardListCategory'
import { CardListControls } from './CardListControls'
import { CardListAddItemBox } from './CardListAddItemBox'
import { CardListInfoHeading } from './CardListInfoHeading'

import './CardList.style.css'

type CardListProps = {
  openAddItemForm: () => void
}

const EMPTY_CARD_DATA_LABEL = 'No items'

export const CardList: React.FC<CardListProps> = ({ openAddItemForm }) => {
  const [isEditModeToggled, setIsEditModeToggled] = useState(true)
  const {
    editCurrentShoppingListName,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItemFn,
    checkItemFn,
    currentShoppingList,
  } = useShoppingListContext()

  return (
    <div className='card-list__container'>
      <div className='card-list__wrapper'>
        <CardListAddItemBox onAddItem={openAddItemForm} />
        {!currentShoppingList ? (
          <>
            <p className='card-list__empty-message'>{EMPTY_CARD_DATA_LABEL}</p>
            <CardEmptyHolder className='card-list__illustration' />
          </>
        ) : (
          <div className='card-list__list-info'>
            <CardListInfoHeading
              headline={currentShoppingList.name}
              isModeToggled={isEditModeToggled}
              modeToggler={setIsEditModeToggled}
            />

            {currentShoppingList.categories &&
              currentShoppingList.categories.map((category) => (
                <CardListCategory
                  checkItemFn={checkItemFn}
                  isEditModeToggled={isEditModeToggled}
                  categoryId={category.id}
                  removeItemFn={(categoryId) => (itemId) =>
                    removeItemFn(categoryId, itemId)}
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
      <CardListControls
        onSaveName={editCurrentShoppingListName}
        isCardEmpty={!currentShoppingList}
        isEditModeToggled={isEditModeToggled}
      />
    </div>
  )
}
