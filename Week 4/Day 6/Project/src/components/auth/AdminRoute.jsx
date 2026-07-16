import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const AdminRoute = () => {

  const { user } = useAuth()

  if (!user || user.role !== "Admin") {
    return <Navigate to="/403" replace />
  }

  return <Outlet />

}

export default AdminRoute
