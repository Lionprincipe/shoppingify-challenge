import React, { useEffect, useState } from 'react'
import { IconsRef } from '../../types/icon'
import { Icon } from '../Icon/Icon'

type CardListItemInputProps = {
  value: number
  isEditModeToggled: Boolean
  itemId: string
  label: string
  checked: boolean
  checkItemFn: (itemId: string) => void
  onRemove: (itemId: string) => void
  onIncrement: (itemId: string) => void
  onDecrement: (itemId: string) => void
}

const DEFAULT_QUANTITY_UNIT = 'pcs'

export const CardListItemInput: React.FC<CardListItemInputProps> = ({
  value = 1,
  itemId,
  isEditModeToggled,
  label,
  checked,
  checkItemFn,
  onRemove,
  onIncrement,
  onDecrement,
}) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (!isEditModeToggled) {
      setToggle(false)
    }
  }, [isEditModeToggled])

  const handleExpand = () => {
    if (isEditModeToggled) {
      setToggle(!toggle)
    }
  }

  return (
    <div className='card-list__input-group'>
      <label className='card-list__category__item__label'>
        {!isEditModeToggled && (
          <input
            checked={checked}
            onChange={() => checkItemFn(itemId)}
            type='checkbox'
          />
        )}
        <span>{label}</span>
      </label>
      <div
        className={`item-input__button ${
          isEditModeToggled && toggle ? '' : 'item-input__button--hide-btn'
        }
    `}
      >
        <button
          onClick={() => onRemove(itemId)}
          className='item-input__button__delete'
        >
          <Icon iconRef={IconsRef.Delete} />
        </button>
        <button
          className='item-input__button__minus'
          onClick={() => onDecrement(itemId)}
          disabled={!toggle || value <= 1}
        />
        <span
          onClick={handleExpand}
          className='item-input__input'
        >{`${value} ${DEFAULT_QUANTITY_UNIT}`}</span>
        <button
          className='item-input__button__plus'
          onClick={() => onIncrement(itemId)}
          disabled={!toggle}
        />
      </div>
    </div>
  )
}
