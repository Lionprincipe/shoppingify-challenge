import React from 'react'

import { ReactComponent as BackIcon } from '../../assets/icons/arrow_left.svg'
import './BackButton.style.css'

type BackButtonProps = {
  className?: string
  text?: string
}

export const BackButton: React.FC<BackButtonProps> = ({ className, text }) => {
  return (
    <div className={`back-button ${className || ''}`}>
      <BackIcon className='icon' />
      {text || 'back'}
    </div>
  )
}
