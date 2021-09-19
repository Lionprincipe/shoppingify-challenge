import React, { useState } from 'react'
import { CustomButton } from '..'
import { addItemFormSchema } from '../../helpers/input-validation'
import { useCategoriesItems } from '../../hooks/useCategoriesItems'

import { InputFieldsTypes, InputFiledNamesTypes } from '../../types'
import { InputField } from '../input-field/InputField'
import { inputInfo, addItemHeading, optionalMarker } from './AddItemForm.data'

import './AddItemForm.style.css'

const INITIAL_INPUT_STATE = { name: '', note: '', imageUrl: '', category: '' }

const requiredInputs = inputInfo.filter((el) => !el.optional)

export const AddItemForm = () => {
  const [inputValues, setInputValues] =
    useState<InputFieldsTypes>(INITIAL_INPUT_STATE)
  const [errors, setErrors] = useState(inputValues)

  const { addItem } = useCategoriesItems()

  const hasAllRequiredFieldsCorrectValues = requiredInputs.every(
    ({ name }) => !!inputValues[name] && !errors[name]
  )

  const checkForError =
    (name: InputFiledNamesTypes) => async (value: string) => {
      try {
        setErrors({ ...errors, [name]: '' })
        await addItemFormSchema.validateAt(name, { [name]: value })
      } catch ({ message = '' }) {
        setErrors({ ...errors, [name]: message })
      }
    }

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const isValid = await addItemFormSchema.validate(inputValues)
      if (isValid) {
        addItem(inputValues)
        setInputValues(INITIAL_INPUT_STATE)
      }
    } catch (err) {
      console.log('invalid inputs')
    }
  }

  return (
    <div className='add-item__container'>
      <h2>{addItemHeading}</h2>
      <form className='add-item__form' onSubmit={onsubmit}>
        {inputInfo.map(
          ({ label, placeholder, name, type, optional, options }) => (
            <InputField
              onErrorCheck={checkForError(name)}
              label={`${label}${optional ? ' ' + optionalMarker : ''} `}
              errorMessage={errors[name] || ''}
              name={name}
              type={type}
              onChange={(value) =>
                setInputValues({ ...inputValues, [name]: value })
              }
              options={options}
              value={`${
                inputValues && typeof inputValues[name] === 'string'
                  ? inputValues[name]
                  : ''
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
              setInputValues(INITIAL_INPUT_STATE)
            }}
          >
            cancel
          </CustomButton>
          <CustomButton
            type='submit'
            disabled={!hasAllRequiredFieldsCorrectValues}
          >
            {' '}
            Save
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
