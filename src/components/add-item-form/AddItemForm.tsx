import React, { useState } from 'react'
import { CustomButton } from '..'
import { InputFieldsTypes } from '../../types'
import { InputField } from '../input-field/InputField'
import { inputInfo, addItemHeading, optionalMarker } from './AddItemForm.data'

import './AddItemForm.style.css'

export const AddItemForm = () => {
  const [inputValues, setInputValues] = useState<Partial<InputFieldsTypes>>({})

  return (
    <div className='add-item__container'>
      <h2>{addItemHeading}</h2>
      <form className='add-item__form'>
        {inputInfo.map(
          ({ label, placeholder, name, type, optional, options }) => (
            <InputField
              label={`${label}${optional ? ' ' + optionalMarker : ''} `}
              name={name}
              type={type}
              onChange={(value) =>
                setInputValues({ ...inputValues, [name]: value })
              }
              options={options}
              value={`${
                typeof inputValues[name] === 'string' ? inputValues[name] : ''
              }`}
              placeholder={placeholder}
              key={label}
            />
          )
        )}

        <div className='form__control-btns'>
          <CustomButton
            styleVariation='flat'
            onClick={() => {
              setInputValues({})
            }}
          >
            cancel
          </CustomButton>
          <CustomButton> Save</CustomButton>
        </div>
      </form>
    </div>
  )
}
