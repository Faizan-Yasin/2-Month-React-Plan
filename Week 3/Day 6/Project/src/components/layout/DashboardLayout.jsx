import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useTheme } from '../../context/ThemeContext'
import NotificationList from '../notification/NotificationList'

const DashboardLayout = () => {

  const { theme } = useTheme()

  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 font-sans
                ${theme === "light"
          ? "bg-white text-black"
          : "bg-gray-900 text-white"}`}>
          <Navbar />
          <Sidebar />
        <NotificationList />
      </div>
    </>

  )
}

export default DashboardLayout
