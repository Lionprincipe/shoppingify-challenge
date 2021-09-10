import React from 'react'

export const ItemDetailsTextField = ({
  label,
  value,
}: {
  label: string
  value: string
}) => {
  return (
    <div className='item-details__text-field'>
      <h4 className='item-details__text-field__label'>{label}</h4>
      <p className='item-details__text-field__value'>{value}</p>
    </div>
  )
}
