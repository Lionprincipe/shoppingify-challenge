import React from 'react'

import { ContextProviders } from '../../contexts'

import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom'
import { RightSideBar, Layout } from '..'
import { routes } from '../../config/routes'

import './App.style.css'

export const App: React.FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProviders>
          <Switch>
            <Layout rightSideChildren={<RightSideBar />}>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) => (
                      <route.component {...route.props} {...props} />
                    )}
                  />
                )
              })}
            </Layout>
          </Switch>
        </ContextProviders>
      </BrowserRouter>
    </>
  )
}
