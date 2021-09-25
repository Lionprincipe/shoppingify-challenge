import React, { useState } from 'react'
import { CustomButton } from '..'

type CardListControlsProps = {
  isReadyToArchive: boolean
  handleArchiveCompleted: () => void
  onComplete: () => void
  onCancel: () => void
  isEditModeToggled: boolean
  isCardEmpty: boolean
  onSaveName: (name: string) => void
}

const INPUT_NAME_PLACEHOLDER = 'enter a name'

export const CardListControls: React.FC<CardListControlsProps> = ({
  isReadyToArchive,
  isEditModeToggled,
  isCardEmpty,
  onSaveName,
  onComplete,
  onCancel,
  handleArchiveCompleted,
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
          <CustomButton onClick={onCancel} styleVariation='flat'>
            cancel
          </CustomButton>
          <CustomButton
            onClick={isReadyToArchive ? handleArchiveCompleted : onComplete}
            colorVariation={isReadyToArchive ? 'primary' : 'info'}
          >
            {isReadyToArchive ? 'Archive completed' : 'complete'}
          </CustomButton>
        </>
      )}
    </div>
  )
}
