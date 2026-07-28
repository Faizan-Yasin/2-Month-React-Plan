import React from 'react'
import { useParams } from 'react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getEmployeeById } from '../api/employeeService'

const EmployeeDetail = () => {

    const { id } = useParams()
    const { data: employee, refetch } = useSuspenseQuery({
        queryKey: ["employee", id],
        queryFn: () => getEmployeeById(id),
        networkMode: "always",
        throwOnError: true,
    })

    return (
        <div className='bg-gray-600 m-4 font-semibold cursor-pointer transition hover:scale-101 text-white rounded-lg p-4'>
            <h3>Employee ID : {employee.id}</h3>
            <h3>Employee Name : {employee.name}</h3>
            <h3>Employee Email : {employee.email}</h3>
        </div>
    )
}

export default EmployeeDetail
