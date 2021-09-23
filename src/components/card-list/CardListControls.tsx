import React, { useState } from 'react'
import { CustomButton } from '..'

type CardListControlsProps = {
  isEditModeToggled: boolean
  isCardEmpty: boolean
  onSaveName: (name: string) => void
}

const INPUT_NAME_PLACEHOLDER = 'enter a name'

export const CardListControls: React.FC<CardListControlsProps> = ({
  isEditModeToggled,
  isCardEmpty,
  onSaveName,
}) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='card-list__controls'>
      {isEditModeToggled ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSaveName(inputValue)
            setInputValue('')
          }}
          className={`card-list__control__input-name ${
            isCardEmpty ? '' : 'card-list__control__input-name--active'
          }`}
        >
          <input
            placeholder={INPUT_NAME_PLACEHOLDER}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <CustomButton type='submit' disabled={isCardEmpty}>
            Save
          </CustomButton>
        </form>
      ) : (
        <>
          <CustomButton styleVariation='flat'>cancel</CustomButton>
          <CustomButton colorVariation='info'>complete</CustomButton>
        </>
      )}
    </div>
  )
}
