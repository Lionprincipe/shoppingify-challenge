import React from 'react'
import { CustomButton } from '..'
import { useGetInputData } from '../../hooks/useGetInputData'

import { InputField } from '../input-field/InputField'

import './AddItemForm.style.css'

export const AddItemForm: React.FC<{ onCancelScreenChange: () => void }> = ({
  onCancelScreenChange,
}) => {
  const {
    errors,
    errorHandler,
    cancelDetails,
    submitDetails,
    heading,
    data,
    getInputValue,
    onChangeHandler,
    addMarkAsOptional,
  } = useGetInputData()
  return (
    <div className='add-item__container'>
      <h2>{heading}</h2>
      <form className='add-item__form' onSubmit={submitDetails.onsubmit}>
        {data.map(({ label, placeholder, name, type, optional, options }) => (
          <InputField
            onErrorCheck={errorHandler(name)}
            label={addMarkAsOptional(label, !!optional)}
            errorMessage={errors[name] || ''}
            name={name}
            type={type}
            onChange={onChangeHandler(name)}
            options={options}
            value={getInputValue(name)}
            placeholder={placeholder}
            key={label}
          />
        ))}

        <div className='form__control-btns'>
          <CustomButton
            styleVariation='flat'
            onClick={cancelDetails.onCancel(onCancelScreenChange)}
          >
            {cancelDetails.btn.label}
          </CustomButton>
          <CustomButton type='submit' disabled={submitDetails.btn.disable}>
            {submitDetails.btn.label}
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
