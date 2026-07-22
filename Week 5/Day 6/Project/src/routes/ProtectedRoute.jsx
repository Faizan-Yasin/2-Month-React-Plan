import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const items = useSelector((state) => state.cart.items)

  if (items.length === 0) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default ProtectedRoute