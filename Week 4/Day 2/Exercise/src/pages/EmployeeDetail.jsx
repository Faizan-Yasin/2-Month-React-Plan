import React from 'react'
import { useParams, Outlet, NavLink } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'
import BreadCrumb from './Breadcrumb'

const EmployeeDetail = () => {

    const { id } = useParams()
    const { data: employee, loading, error } = useFetchData(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <div className='employeeContainer'>
                <h2>Employee Name : {employee.name}</h2>
                <h2>Employee Email : {employee.email}</h2>
                <h2>Employee Company : {employee.company.name}</h2>
            </div>
            <nav>
                <NavLink to="overview">Overview</NavLink>{" | "}
                <NavLink to="posts">Posts</NavLink>{" | "}
                <NavLink to="todos">Todos</NavLink>
            </nav>
            <hr />
            <BreadCrumb />
            <hr />
            <Outlet context={{ employee }} />
        </div>
    )
}

export default EmployeeDetail
