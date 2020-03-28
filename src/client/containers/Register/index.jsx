import React from 'react'
import { withUserForm } from '../../hoc/withUserForm'
import { withContext } from '../../hoc/withContext'

const Register = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default withContext(withUserForm(Register, 'sign-up', 'Sign up'))