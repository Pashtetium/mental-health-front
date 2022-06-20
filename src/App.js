import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { Login } from 'components/pages'
import './App.css'

function PossibleRoutes({ authenticated }) {
  return (
    <Routes>
      {authenticated && <Route element={<Navigate replace to="/main" />} path="/signin" />}
      <Route element={<Navigate replace to="/signin" />} path="/" />
      <Route element={<Navigate replace to="/main" />} path="*" />
    </Routes>
  )
}

function App() {
  const [authenticated, setAuthenticated] = useState(null)

  useEffect(() => {
    AuthService.isAuthenticated(false)
      .then(res => {
        setAuthenticated(res)
        showMenu()
      })

    UserModel.loadMe()
    UserModel.getCompanyCode()

    !localStorage.getItem('access_token') && setAuthenticated(false)
  }, [showMenu])

  return (
    <Login />
  )
}

export default App
