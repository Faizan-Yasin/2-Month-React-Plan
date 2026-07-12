import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Employees from './pages/Employees'
import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Forbidden from './pages/Forbidden'
import AdminPanel from './pages/AdminPanel'
import AdminRoute from './pages/AdminRoute'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/403' element={<Forbidden />} />

          <Route element={<ProtectedRoute />} >

            <Route element={<Layout />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/settings' element={<Settings />} />
              <Route element={<AdminRoute />}>
                <Route path='/admin' element={<AdminPanel />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
