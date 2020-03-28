import React from 'react'
import { withUserForm } from '../../hoc/withUserForm'
import { withContext } from '../../hoc/withContext'

const Login = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default withContext(withUserForm(Login, 'sign-in', 'Sign in'))
