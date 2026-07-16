import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Employees from '../pages/Employees'
import NotFound from '../pages/NotFound'
import Settings from '../pages/Settings'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import AdminRoute from '../components/auth/AdminRoute'
import Forbidden from '../pages/Forbidden'
import EmployeeDetail from '../pages/EmployeeDetail'
import Layout from '../components/layout/Layout'
import EmployeeForm from '@/pages/EmployeeForm'
import LoginRoute from '@/components/auth/LoginRoute'

const AppRoutes = () => {

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />

          <Route element={<LoginRoute />} >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route element={<ProtectedRoute />}>

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/employees/new' element={<EmployeeForm />} />
            <Route path='/employees/:id/edit' element={<EmployeeForm />} />
            <Route path='/employees/:id' element={<EmployeeDetail />} />

            <Route element={<AdminRoute />} >
              <Route path='/settings' element={<Settings />} />
            </Route>

          </Route>

          <Route path='*' element={<NotFound />} />
          <Route path='/403' element={<Forbidden />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
