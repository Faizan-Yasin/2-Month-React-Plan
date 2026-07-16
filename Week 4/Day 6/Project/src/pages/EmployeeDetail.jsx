import React from "react"
import { useParams } from "react-router-dom"
import useEmployees from "../hooks/useEmployees"
import EmployeeCard from "../components/ui/EmployeeCard"

const EmployeeDetail = () => {

  const { id } = useParams()

  const { employees, deleteEmployee } = useEmployees()

  const employee = employees.find(emp => emp.id === id)

  if (!employee) {
    return <h1>Employee Not Found</h1>
  }

  return (
    <EmployeeCard employee={employee} deleteEmployee={deleteEmployee} />
  )

}

export default EmployeeDetail