import React, { useState } from 'react'
import { InputTypes } from '../../types'
import { InputSelect } from './InputSelect'

import './InputField.style.css'

type InputFieldProps = {
  label: string
  type: InputTypes
  onChange: (value: string) => void
  placeholder: string
  value: string
  options?: { label: string; value: string }[]
  name: string
}

export const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  label,
  onChange,
  value,
  options,
  placeholder,
  name,
}) => {
  const [isInputHasFocus, setIsInputHasFocus] = useState(false)

  let input: React.ReactNode
  switch (true) {
    case type === InputTypes.Select && options && options?.length > 0:
      input = (
        <InputSelect
          value={value}
          handleFocus={setIsInputHasFocus}
          handleChange={onChange}
          isInputHasFocus={isInputHasFocus}
          options={options}
          placeholder={placeholder}
        />
      )
      break
    case type === InputTypes.TextArea:
      input = (
        <textarea
          onFocus={() => {
            setIsInputHasFocus(true)
          }}
          onBlur={() => {
            setIsInputHasFocus(false)
          }}
          className={'input-field__group__main-element'}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete='off'
        />
      )
      break
    case type === InputTypes.Text:
    case type === InputTypes.Number:
    default:
      input = (
        <input
          onFocus={() => {
            setIsInputHasFocus(true)
          }}
          onBlur={(e) => {
            setIsInputHasFocus(false)
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='input-field__group__main-element'
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete='off'
        />
      )
      break
  }

  return (
    <div
      className={`input-field__group ${
        isInputHasFocus ? 'input-field__group--has-focus' : ''
      }`}
    >
      <label>
        <span className='input-field__label'>{label}</span>
        {input}
      </label>
    </div>
  )
}
