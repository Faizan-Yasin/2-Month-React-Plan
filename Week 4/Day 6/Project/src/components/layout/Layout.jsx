import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useTheme } from '@/hooks/useTheme'
const Layout = () => {

  const { theme } = useTheme()

  return (
    <div
      className='min-h-screen flex flex-col'>
      <Navbar />
      <main className={`${theme === "light" ? " bg-gray-100 text-black" : "bg-gray-900 text-white"} flex-1 p-6`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
