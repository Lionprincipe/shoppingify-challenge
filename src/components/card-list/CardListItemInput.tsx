import React, { useState } from 'react'

type CardListItemInputProps = {
  value: number
  isToggle?: boolean
}
export const CardListItemInput: React.FC<CardListItemInputProps> = ({
  value = 1,
  isToggle = false,
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [toggle, setToggle] = useState(isToggle)

  const onMinus = () => {
    if (inputValue > 0) {
      setInputValue(inputValue - 1)
    }
  }
  const onPlus = () => {
    setInputValue(inputValue + 1)
  }
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
        onClick={onMinus}
        disabled={!toggle}
      />
      <span
        onClick={handleExpand}
        className='item-input__input'
      >{`${inputValue} pcs`}</span>
      <button
        className='item-input__button__plus'
        onClick={onPlus}
        disabled={!toggle}
      />
    </div>
  )
}
