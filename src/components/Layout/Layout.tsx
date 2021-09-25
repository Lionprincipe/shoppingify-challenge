import React from 'react'
import { SideNavbar } from '..'
import { ModalAlert } from '../modal-alert/ModalAlert'

import './Layout.style.css'
type LayoutProps = {
  rightSideChildren?: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  rightSideChildren,
}) => {
  return (
    <div className='layout__container'>
      <div className='layout__left-sidebar'>
        <SideNavbar />
      </div>
      <main className='layout-main-container'>
        <div className='layout-main-content__wrapper'>{children}</div>
      </main>
      <ModalAlert />
      {rightSideChildren && (
        <div className='layout__right-sidebar'>{rightSideChildren}</div>
      )}
    </div>
  )
}
