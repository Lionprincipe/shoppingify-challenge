import React from 'react'
import { BackButton, CustomButton } from '..'
import { useItemDetails } from '../../hooks/useItemsDetails'
import { useShoppingListContext } from '../../hooks/useShoppingListContext'
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
  if (!!itemDetails) {
    const {
      item,
      isItemExistInCurrentShoppingList,
      categoryTitle,
      shoppingListItemsDetails,
      shoppingListCategoryDetails,
    } = itemDetails

    return (
      <div className='item-details__wrapper'>
        <div className='item-details__container'>
          <div>
            <BackButton onClick={onBack} />
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
          <CustomButton styleVariation='flat'>delete</CustomButton>
          <CustomButton
            disabled={isItemExistInCurrentShoppingList}
            onClick={() =>
              addItemToShoppingList(
                shoppingListItemsDetails,
                shoppingListCategoryDetails
              )
            }
          >
            add to list
          </CustomButton>
        </div>
      </div>
    )
  } else {
    return <p>this item was not found</p>
  }
}
