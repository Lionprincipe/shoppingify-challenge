import React, { useEffect, useState } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

type InputSelectProps = {
  placeholder: string
  isInputHasFocus: boolean
  handleChange: (value: string) => void
  handleFocus: (hasFocus: boolean) => void
  value: string
  options?: { label: string; value: string }[]
}

export const InputSelect: React.FC<InputSelectProps> = ({
  placeholder,
  handleChange,
  handleFocus,
  isInputHasFocus,
  value,
  options,
}) => {
  const [showOptions, setShowOptions] = useState(isInputHasFocus)

  useEffect(() => {
    setShowOptions(isInputHasFocus)
  }, [isInputHasFocus])

  return (
    <div className='input-select__container'>
      {showOptions && options && (
        <select
          className='input-select__select'
          size={options.length || 0}
          onMouseDown={(e) => {
            e.preventDefault()
          }}
        >
          {options &&
            options.map(({ label, value: optValue }) => (
              <option
                className={`input-select__option ${
                  value === optValue ? 'input-select__option--selected ' : ''
                }`}
                onMouseDown={() => {
                  handleChange(optValue)
                  setShowOptions(false)
                }}
                value={optValue}
                key={optValue}
              >
                {label}
              </option>
            ))}
        </select>
      )}

      <input
        className='input-field__group__main-element'
        placeholder={placeholder}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onMouseDown={() => {
          handleFocus(true)
          setShowOptions(true)
        }}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
      <button
        type='button'
        onMouseDown={(e) => {
          if (!value) {
            setShowOptions(false)
          } else {
            e.preventDefault()
            handleChange('')
            setShowOptions(true)
          }
        }}
        className='input-select__delete-btn'
      >
        <CloseIcon className='close-icon' />
      </button>
    </div>
  )
}
