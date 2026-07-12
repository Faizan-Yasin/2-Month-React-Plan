import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Overview = () => {

    const { employee } = useOutletContext()

    return (
        <div>
            <h2>Overview</h2>
            <h3>Username : {employee.username}</h3>
            <h3>Email : {employee.email}</h3>
            <h3>Company : {employee.company.name}</h3>
        </div>
    )
}

export default Overview
