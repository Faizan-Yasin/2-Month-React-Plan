import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {

  useEffect(() => {
    document.body.className = "bg-gray-900 text-white"
  }, [])

  return (
    <div>
      <Navbar />
      <div className='mx-auto flex-1 flex justify-center items-start mt-20'>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
