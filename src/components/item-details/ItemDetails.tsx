import React from 'react'
import { BackButton } from '..'
import { itemsDetails } from './itemDetails.data'

import './ItemDetails.style.css'

import { ItemDetailsTextField } from './ItemDetailsTextField'
export const ItemsDetails = () => {
  const { note, name, imageUrl, category } = itemsDetails
  return (
    <div className='item-details__wrapper'>
      <div className='item-details__container'>
        <div>
          <BackButton />
          <picture className='item-details__illustration '>
            {name && imageUrl && <img src={imageUrl} alt={name.value} />}
          </picture>
          <ItemDetailsTextField {...name} />
          <ItemDetailsTextField {...category} />
          <ItemDetailsTextField {...note} />
        </div>
      </div>
    </div>
  )
}
