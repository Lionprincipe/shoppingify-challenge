import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { ReactComponent as BackIcon } from '../../assets/icons/arrow_left.svg'
import './BackButton.style.css'

type BackButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string
  text?: string
}

type LinkBackButtonProps<S = unknown> = LinkProps<S> &
  React.RefAttributes<HTMLAnchorElement> & {
    className?: string
    text?: string
  }

export const BackButton: React.FC<BackButtonProps | LinkBackButtonProps> = ({
  className,
  text,
  ...otherProps
}) => {
  const children = (
    <>
      <BackIcon className='icon' />
      {text || 'back'}
    </>
  )

  return 'to' in otherProps ? (
    <Link {...otherProps} className={`back-button ${className || ''}`}>
      {children}
    </Link>
  ) : (
    <button {...otherProps} className={`back-button ${className || ''}`}>
      {children}
    </button>
  )
}
