import React from 'react'
import { Sidebar } from '..'

import './Layout.style.css'
type LayoutProps = {
  rightSideChildren?: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  rightSideChildren,
}) => {
  return (
    <>
      <Sidebar />

      <main className='deskstop'>
        <div className='container'>{children}</div>
      </main>
      {rightSideChildren && (
        <div className='sidebar-right'>{rightSideChildren}</div>
      )}
    </>
  )
}
