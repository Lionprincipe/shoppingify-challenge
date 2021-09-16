import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { Icon } from '../Icon/Icon'
import { NavLinkType } from './SideNavBar.data'

type SideNavBarLinkProps = LinkProps & NavLinkType & { iconClassName?: string }

export const SideNavBarLink: React.FC<SideNavBarLinkProps> = ({
  text,
  iconRef,
  iconClassName,
  ...otherProps
}) => {
  return (
    <Link {...otherProps} className='side-navbar__link'>
      <Icon iconRef={iconRef} className={iconClassName} />
      <span className='side-navbar__link-info'>{text}</span>
    </Link>
  )
}
