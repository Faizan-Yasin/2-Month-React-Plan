import React from 'react'
import { useTheme } from '../../context/ThemeContext';

const Card = ({ children }) => {

  const { theme } = useTheme()

  return (
    <div className={`rounded-xl shadow-md p-6 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700"}`}>
      {children}
    </div>
  )
}

export default Card
