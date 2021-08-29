import React from 'react'

import { ItemsPages } from '../../pages'
import Layout from '../Layout/Layout'

import './App.style.css'

export function App() {
  return (
    <div className='App mobile'>
      <Layout>
        <ItemsPages />
      </Layout>
    </div>
  )
}
