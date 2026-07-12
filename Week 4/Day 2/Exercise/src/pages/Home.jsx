import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Data Company</h2>
            <nav>
                <NavLink to="/employees"><h1>Employees</h1></NavLink>
            </nav>
        </div>
    )
}

export default Home
