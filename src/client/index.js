import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes/App'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import Context from './Context'
const history = createBrowserHistory()

ReactDOM.hydrate(
  <Router history={history}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </Router>,
  document.getElementById('app')
)
