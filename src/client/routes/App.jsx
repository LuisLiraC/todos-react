import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Hello } from '../containers/Hello'
import { Other } from '../containers/Other'
import Login from '../containers/Login'
import Register from '../containers/Register'
import { NotFound } from '../containers/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Hello} />
          <Route path="/sign-in" exact component={Login} />
          <Route path="/sign-up" exact component={Register} />
          <Route path="/other" exact component={Other} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
