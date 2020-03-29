import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
    <nav>
      <ol>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/other'>
            Other
          </Link>
        </li>
        <li>
          <Link to='/sign-in'>
            Sign in
          </Link>
        </li>
        <li>
          <Link to='/sign-up'>
            Sign up
          </Link>
        </li>
      </ol>
    </nav>
  )
}