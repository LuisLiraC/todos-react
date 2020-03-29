import React, { createContext, useState, useEffect } from 'react'
import verifyToken from './utils/verifyToken'
const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const getAuth = async () => {
      const result = await verifyToken()
      setIsAuth(result)
    }
    getAuth()
  }, [])

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}