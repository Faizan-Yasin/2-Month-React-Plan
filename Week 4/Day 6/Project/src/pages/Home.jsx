import React from "react"
import { Link } from "react-router-dom"
import { motion } from "motion/react";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";

const Home = () => {

  const { user } = useAuth()
  const { theme } = useTheme()

  return (
    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}

      className={`${theme === "light" ? "  bg-gray-100" : "bg-gray-900"} flex-1`}>

      <section className="max-w-6xl mx-auto py-24 text-center">
        <h1 className="text-5xl font-bold">Employee Management System</h1>
        <p className={`${theme === "light" ? "  bg-gray-100 text-gray-600" : "bg-gray-900 text-white"} mt-6 text-lg`}>Manage employees, departments and user roles using React, React Hook Form and Zod.</p>

        {
          !user &&
          <div className="mt-10 space-x-4">
            <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Login</Link>
            <Link to="/register" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Register</Link>
          </div>
        }
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6 cursor-pointer hover:scale-105 transition duration-300`}>
          <h2 className="font-bold text-xl"> Secure Authentication</h2>
          <p className="mt-2 text-gray-600">Login, Register and Protected Routes.</p>
        </div>

        <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6 cursor-pointer hover:scale-105 transition duration-300`}>
          <h2 className="font-bold text-xl">Employee Management</h2>
          <p className="mt-2 text-gray-600">Add, Update and Delete Employees.</p>
        </div>

        <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6 cursor-pointer hover:scale-105 transition duration-300`}>
          <h2 className="font-bold text-xl">Admin Dashboard</h2>
          <p className="mt-2 text-gray-600">View employee statistics and reports.</p>
        </div>
      </section>
    </motion.div>
  )
}

export default Home