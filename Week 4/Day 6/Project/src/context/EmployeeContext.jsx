import React, { createContext, useState, useEffect } from 'react'

const EmployeeContext = createContext(null)

const EmployeeProvider = ({ children }) => {

    const initialEmployees = [
        {
            id: "1",
            name: "Ali Khan",
            email: "ali@gmail.com",
            department: "IT",
            status: "Active",
        },
        {
            id: "2",
            name: "Sara Ahmed",
            email: "sara@gmail.com",
            department: "HR",
            status: "Pending",
        },
        {
            id: "3",
            name: "Usman Tariq",
            email: "usman@gmail.com",
            department: "Finance",
            status: "Active",
        },
        {
            id: "4",
            name: "Ayesha Noor",
            email: "ayesha@gmail.com",
            department: "Marketing",
            status: "Inactive",
        },
    ];

    const [employees, setEmployees] = useState(initialEmployees)

    useEffect(() => {

        const storedEmployees = localStorage.getItem("employees")

        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees))
        }
        else {
            localStorage.setItem("employees", JSON.stringify(initialEmployees))
        }

    }, [])

    function addEmployee(newEmployee) {

        const updatedEmployees = [...employees, newEmployee]

        setEmployees(updatedEmployees)
        localStorage.setItem("employees", JSON.stringify(updatedEmployees))

    }

    function deleteEmployee(id) {
        const updatedEmployees = employees.filter(employee => employee.id !== id)

        setEmployees(updatedEmployees)

        localStorage.setItem("employees", JSON.stringify(updatedEmployees))
    }

    function updateEmployee(updatedEmployee) {

        const updatedEmployees = employees.map(employee => employee.id === updatedEmployee.id
            ? updatedEmployee
            : employee

        )

        setEmployees(updatedEmployees)

        localStorage.setItem("employees", JSON.stringify(updatedEmployees))
    }

    function getEmployeeById(id) {
        return employees.find(employee => employee.id === id)
    }

    function clearEmployees() {
        setEmployees([])
    }


    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee, clearEmployees, getEmployeeById }}>
            {children}
        </EmployeeContext.Provider>
    )
}

export { EmployeeContext, EmployeeProvider }

