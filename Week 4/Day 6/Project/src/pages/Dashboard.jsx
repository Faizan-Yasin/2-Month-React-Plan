import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import StatCard from '../components/ui/StatCard'
import Spinner from '../components/ui/Spinner'
import { motion } from "motion/react"
import { useTheme } from '@/hooks/useTheme'

const Dashboard = () => {

  const { theme } = useTheme()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const stats = [
    {
      id: 1,
      title: "Employees",
      value: 50,
    },
    {
      id: 2,
      title: "Departments",
      value: 8,
    },
    {
      id: 3,
      title: "Active",
      value: 44,
    },
    {
      id: 4,
      title: "Pending",
      value: 6,
    },
  ];

  async function refreshData() {

    setLoading(true)

    await new Promise(r => setTimeout(r, 1500))

    setLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='space-y-8'>
      {
        loading ?
          <Spinner /> :
          <>
            <div className='text-3xl font-bold'>
              <h1>Welcome Back {" "} {user.name}</h1>
              <p className={`${theme === "light" ? " text-gray-700" : "text-white"} mt-2`}>Role : {" "} <span className='font-semibold capitalize'>{user.role}</span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {
                stats.map(stat => (
                  <StatCard key={stat.id} title={stat.title} value={stat.value} />
                ))
              }
            </div>
            <button onClick={refreshData} disabled={loading} className='bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 disabled:opacity-50'>{loading ? "Refreshing..." : "Refresh Data"}</button>
          </>
      }
    </motion.div>
  )
}

export default Dashboard
