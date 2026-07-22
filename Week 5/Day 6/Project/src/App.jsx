import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const App = () => {

  const theme = useSelector((state) => state.theme.mode)

  useEffect(() => {
    document.body.className = `${theme === 'light' ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`
  }, [theme])

  return (
    <div>
      <AppRoutes />
    </ div>
  )
}

export default App
