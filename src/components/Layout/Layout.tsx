import React from 'react'
import { Sidebar } from '..'
import './Layout.style.css'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar />

      <main className='deskstop'>
        <div className='container'>{children}</div>
      </main>
      <aside className='sidebar-right'>right sidebar</aside>
    </>
  )
}

export default Layout
