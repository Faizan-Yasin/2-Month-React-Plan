import React from "react"
import useEmployees from "../hooks/useEmployees"
import EmployeeCard from "../components/ui/EmployeeCard"
import { motion } from "motion/react"

const Employees = () => {

  const { employees, deleteEmployee } = useEmployees()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-bold mb-6">Employees</h1>
      <div className="grid gap-6">
        {employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />))
        }
      </div>
    </motion.div>
  )
}

export default Employees