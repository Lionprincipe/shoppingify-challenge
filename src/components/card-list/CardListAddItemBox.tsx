import React from 'react'

import { ReactComponent as AddItemIllustration } from '../../assets/icons/add_item_illustration.svg'

export const CardListAddItemBox: React.FC<{ onAddItem: () => void }> = ({
  onAddItem,
}) => {
  return (
    <div className='card-list__add-item'>
      <span className='card-list__add-item__illustration'>
        <AddItemIllustration className='icon' />
      </span>

      <p className='card-list__add-item__text'>Didn’t find what you need?</p>
      <button onClick={onAddItem} className='card-list__add-item__btn'>
        Add Item
      </button>
    </div>
  )
}
