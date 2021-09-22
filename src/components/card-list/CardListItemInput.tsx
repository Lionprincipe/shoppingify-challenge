import React, { useState } from 'react'

type CardListItemInputProps = {
  value: number
  itemId: string
  incrementQuantity: (itemId: string) => void
  decrementQuantity: (itemId: string) => void
  isToggle?: boolean
}

const DEFAULT_QUANTITY_UNIT = 'pcs'

export const CardListItemInput: React.FC<CardListItemInputProps> = ({
  value = 1,
  isToggle = false,
  itemId,
  incrementQuantity,
  decrementQuantity,
}) => {
  const [toggle, setToggle] = useState(isToggle)

  const handleExpand = () => {
    setToggle(!toggle)
  }

  return (
    <div
      className={`item-input__button ${
        toggle ? '' : 'item-input__button--hide-btn'
      }
    `}
    >
      <button
        className='item-input__button__minus'
        onClick={() => decrementQuantity(itemId)}
        disabled={!toggle || value <= 1}
      />
      <span
        onClick={handleExpand}
        className='item-input__input'
      >{`${value} ${DEFAULT_QUANTITY_UNIT}`}</span>
      <button
        className='item-input__button__plus'
        onClick={() => incrementQuantity(itemId)}
        disabled={!toggle}
      />
    </div>
  )
}
