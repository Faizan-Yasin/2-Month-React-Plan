import React, { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'

const App = () => {

  useEffect(() => {
    document.body.className = 'bg-gray-900 text-white'
  }, [])


  return (
    <div>
      <Navbar />
      <div className='p-4'>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
