import React from 'react'

import './custom-button.style.css'

type BtnProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  styleVariation?: 'flat' | 'rounded' | 'normal'
  colorVariation?:
    | 'secondary'
    | 'primary'
    | 'danger'
    | 'success'
    | 'info'
    | 'basic'
  marginHorizontal?: number
  marginVertical?: number
  type?: 'button' | 'submit'
}
export const CustomButton: React.FC<BtnProps> = ({
  type = 'button',
  colorVariation = 'primary',
  styleVariation = 'normal',
  ...others
}) => {
  return (
    <button
      {...others}
      className={`custom-button
       ${!!colorVariation ? `custom-button__${colorVariation}` : ''}
       ${!!styleVariation ? `custom-button__${styleVariation}` : ''}
      `}
      type={type}
    />
  )
}
