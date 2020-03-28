import React, { useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import axios from 'axios'


export const withUserForm = (WrappedComponent, endpoint, btnText) => {
  return ({ activateAuth }) => {
    const [form, setForm] = useState({})

    const handleInput = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = async e => {
      e.preventDefault()
      try {        
        const { data } = await axios(`/user/${endpoint}`, {
          method: 'POST',
          data: form,
        })
        console.log(data)
        activateAuth()
      } catch (error) {
        console.log(error.message)
      }
      
    }

    return (
      <WrappedComponent>
        <form onSubmit={handleSubmit} method="post">
          <Input
            type="text"
            name="username"
            labelText="Username"
            handleInput={handleInput}
            autoComplete="username"
          />
          <Input
            type="password"
            name="password"
            labelText="Password"
            handleInput={handleInput}
            autoComplete="password"
          />
          <Button type="submit" btnText={btnText} />
        </form>
      </WrappedComponent>
    )
  }
}
