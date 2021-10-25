import React from 'react'
import { BackButton, CustomButton } from '..'
import { useItemDetails } from '../../hooks/useItemsDetails'
import { useShoppingListContext } from '../../hooks/useShoppingListContext'
import { useUIContext } from '../../hooks/useUIContext'
import { IconsRef } from '../../types/icon'
import { Icon } from '../Icon/Icon'
import { defaultValues } from './itemDetails.data'

import './ItemDetails.style.css'

import { ItemDetailsTextField } from './ItemDetailsTextField'

type ItemsDetailsProps = {
  onBack: () => void
  itemId?: string
  categoryId?: string
}
export const ItemsDetails: React.FC<ItemsDetailsProps> = ({
  onBack,
  itemId = '',
  categoryId = '',
}) => {
  const itemDetails = useItemDetails(itemId, categoryId)
  const { addItemToShoppingList } = useShoppingListContext()
  const { flushSidebarHistory, nbViewsInHistory } = useUIContext()

  if (!!itemDetails) {
    const {
      deleteItem,
      item,
      isItemExistInCurrentShoppingList,
      categoryTitle,
      shoppingListItemsDetails,
      shoppingListCategoryDetails,
    } = itemDetails

    return (
      <div className='item-details__wrapper'>
        <div className='item-details__container'>
          <header className='item-details__container__header'>
            <BackButton onClick={onBack} />
            <div className='item-details__stacks-box'>{nbViewsInHistory}</div>
            <button
              onClick={flushSidebarHistory}
              className='item-details__close-btn'
            >
              <Icon iconRef={IconsRef.Close} />
            </button>
          </header>
          <div>
            <picture className='item-details__illustration '>
              <img
                src={item?.imageUrl || defaultValues.imageUrl}
                alt={item.label || ''}
              />
            </picture>
            <ItemDetailsTextField
              label={defaultValues.name.label}
              value={item.label}
            />
            {item.note && (
              <ItemDetailsTextField
                label={defaultValues.note.label}
                value={item.note}
              />
            )}
            {
              <ItemDetailsTextField
                label={defaultValues.category.label}
                value={categoryTitle}
              />
            }
          </div>
        </div>
        <div className='item-details__control-btns'>
          <CustomButton
            onClick={() => {
              deleteItem()
              onBack()
            }}
            styleVariation='flat'
          >
            {defaultValues.deleteBtnLabel}
          </CustomButton>
          <CustomButton
            disabled={isItemExistInCurrentShoppingList}
            onClick={() =>
              addItemToShoppingList(
                shoppingListItemsDetails,
                shoppingListCategoryDetails
              )
            }
          >
            {defaultValues.addBtnLabel}
          </CustomButton>
        </div>
      </div>
    )
  } else {
    return <p>{defaultValues.missingItemText}</p>
  }
}
