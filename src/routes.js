import { React } from 'react'

import {
  Login,
  Main,
  Signup,
} from './components/pages'

export const routes = [
  // { path: '/main', component: <Main />},
  { path: '/signin', component: <Login /> },
  // { path: '/forgot-password', component: <ForgotPassword /> },
  { path: '/signup', component: <SignUp /> },
]
