import React from "react"
import { useAuth } from "../hooks/useAuth"
import useEmployees from "@/hooks/useEmployees"
import { motion } from "motion/react";
import { useTheme } from "@/hooks/useTheme";

const Settings = () => {

  const { theme, setTheme } = useTheme()
  const { user } = useAuth()
  const { clearEmployees } = useEmployees()

  function handleResetEmployees() {

    if (window.confirm("Are you sure you want to reset all employees?")) {
      clearEmployees()
    }

  }

  function handleClearStorage() {

    if (window.confirm("Clear Local Storage?")) {

      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()

    }

  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6`}>
        <h2 className="text-xl font-semibold mb-4">Admin Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6`}>
        <h2 className="text-xl font-semibold mb-4">Application Settings</h2>

        <div className="flex justify-between mb-3">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>

      <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-xl shadow p-6 border border-red-400}`}>
        <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>

        <div className="md:space-x-4 flex flex-col gap-2 md:flex-row">
          <button onClick={handleResetEmployees} className="bg-yellow-500 text-white px-4 py-2 rounded">Reset Employees
          </button>

          <button onClick={handleClearStorage} className="bg-red-600 text-white px-4 py-2 rounded">Clear Local Storage</button>
        </div>
      </div>
    </motion.div >
  )
}

export default Settings