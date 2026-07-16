import React from 'react'
import { useTheme } from '@/hooks/useTheme'

const StatCard = ({ title, value }) => {

  const { theme } = useTheme()

  return (
    <div>
      <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6 hover:shadow-lg transition`}>
        <h3 className={`${theme === "light" ? "bg-white  text-gray-500 " : "bg-gray-600 text-white"} text-sm`}>{title}</h3>
        <h2 className='text-3xl font-bold mt-2'>{value}</h2>
      </div>
    </div>
  )
}

export default StatCard
