import { Hello } from '../containers/Hello'
import { Other } from '../containers/Other'
import { NotFound } from '../containers/NotFound'
import Login from '../containers/Login'
import Register from '../containers/Register'

export const serverRoutes = [
  {
    exact: true,
    path: '/',
    component: Hello,
  },
  {
    exact: true,
    path: '/sign-in',
    component: Login,
  },
  {
    exact: true,
    path: '/sign-up',
    component: Register,
  },
  {
    exact: true,
    path: '/other',
    component: Other,
  },
  {
    name: 'NotFound',
    component: NotFound
  }
]