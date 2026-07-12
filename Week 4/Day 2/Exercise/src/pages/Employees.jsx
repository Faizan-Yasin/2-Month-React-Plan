import React from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Employees = () => {

    const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users/")
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("q") || ""
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().includes(search.toLocaleLowerCase()))

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h1>Employees</h1>
            <h2>Search Employee</h2>
            <div>
                <input type="text" value={search}
                    onChange={(e) => setSearchParams({ q: e.target.value })} placeholder='Search My Name Here...' />
            </div>
            {filteredEmployees.map(employee => (
                <div key={employee.id} className='employeeContainer'
                    onClick={() => navigate(`/employees/${employee.id}`)}>
                    <h2>Employee Name : {employee.name}</h2>
                    <h2>Employee Username : {employee.username}</h2>
                    <h2>Employee Email : {employee.email}</h2>
                    <h2>Employee Phone Number : {employee.phone}</h2>
                </div>
            ))}
        </div>
    )
}

export default Employees
