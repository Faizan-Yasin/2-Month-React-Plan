import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import { getEmployees } from '../api/employeeService'

const Employees = () => {

    const { data, refetch, isLoading } = useSuspenseQuery({
        queryKey: ["employees"],
        queryFn: getEmployees,
        networkMode: "always",
        throwOnError: true,
    })

    if (!isLoading && data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20">

                <div className="text-7xl">
                    👨‍💼
                </div>

                <h2 className="text-2xl font-bold mt-4">
                    No Employees Found
                </h2>

                <p className="text-gray-400 mt-2">
                    You don't have any employees yet.
                </p>

                <button
                    className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white"
                >
                    Add Your First Employee
                </button>

            </div>
        );
    }

    return (
        <div>
            {data?.map(employee => (
                <Link key={employee.id} to={`/employees/${employee.id}`}>
                    <div className='bg-gray-600 m-4 font-semibold cursor-pointer transition hover:scale-101 text-white rounded-lg p-4'>
                        <h3>Employee ID : {employee.id}</h3>
                        <h3>Employee Name : {employee.name}</h3>
                        <h3>Employee Email : {employee.email}</h3>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default Employees
