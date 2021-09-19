import React from 'react'

import { ReactComponent as BackIcon } from '../../assets/icons/arrow_left.svg'
import './BackButton.style.css'

type BackButtonProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  className?: string
  text?: string
}

export const BackButton: React.FC<BackButtonProps> = ({
  className,
  text,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className={`back-button ${className || ''}`}>
      <BackIcon className='icon' />
      {text || 'back'}
    </div>
  )
}
