import React from 'react'
import { SideNavbar } from '..'
import { useUIContext } from '../../hooks/useUIContext'
import { ModalAlert } from '../modal-alert/ModalAlert'

import './Layout.style.css'
type LayoutProps = {
  rightSideChildren?: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  rightSideChildren,
}) => {
  const { showMobileView, flushSidebarHistory } = useUIContext()

  return (
    <div className='layout__container'>
      <div className='layout__left-sidebar'>
        <SideNavbar />
      </div>
      <main className='layout__main-container'>
        <div
          className={`layout__main-content__wrapper ${
            showMobileView
              ? 'layout__main-content__wrapper--mobile-activate'
              : ''
          }`}
        >
          {children}
        </div>
      </main>
      <ModalAlert />
      {rightSideChildren && (
        <div
          className={`layout__right-sidebar ${
            showMobileView ? 'layout__right-sidebar--active' : ''
          }`}
        >
          <div
            onClick={flushSidebarHistory}
            className={`layout__right-sidebar__mobile__overlay
            ${
              showMobileView
                ? 'layout__right-sidebar__mobile__overlay--active'
                : ''
            }  `}
          ></div>
          {rightSideChildren}
        </div>
      )}
    </div>
  )
}
