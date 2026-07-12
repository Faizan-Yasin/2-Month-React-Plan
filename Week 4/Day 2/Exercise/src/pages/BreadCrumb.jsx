import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'

const BreadCrumb = () => {

    const location = useLocation()
    const { id } = useParams()
    const { data: employee } = useFetchData(id ? `https://jsonplaceholder.typicode.com/users/${id}` : null)
    const paths = location.pathname.split('/').filter(Boolean)

    return (
        <div>
            <Link to="/" >Home</Link>
            {paths.map((path, index) => {
                const url = "/" + paths.slice(0, index + 1).join("/")

                let label = path

                if (path === "employees") {
                    label = "Employee"
                }

                if (path === id && employee?.name) {
                    label = employee.name
                }

                return (
                    <span key={url}>
                        {" > "}
                        <Link to={url}>{label}</Link>
                    </span>
                )

            })}
        </div>
    )
}

export default BreadCrumb
