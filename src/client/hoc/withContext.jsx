import React from 'react'
import Context from '../Context'

export const withContext = WrappedComponent => (
  () => (
    <Context.Consumer>
      {context => <WrappedComponent {...context} />}
    </Context.Consumer>
  )
)
