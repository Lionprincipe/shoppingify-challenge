import React from 'react'

import { StatisticsPage } from '../../pages'
import { Layout } from '..'
import { AddItemForm } from '..'

import './App.style.css'

export function App() {
  return (
    <>
      <Layout rightSideChildren={<AddItemForm />}>
        <StatisticsPage />
      </Layout>
    </>
  )
}
