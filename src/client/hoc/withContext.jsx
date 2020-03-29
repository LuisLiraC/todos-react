import React from 'react'
import Context from '../Context'
import verifyToken from '../utils/verifyToken'

export const withContext = WrappedComponent => () => (
  <Context.Consumer>
    {context => {
      async function verifyAuth() {
        const result = await verifyToken()
        context.isAuth = result
      }
      verifyAuth()
      return <WrappedComponent {...context} />
    }}
  </Context.Consumer>
)
