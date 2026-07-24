import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
            </NavLink>

            <NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>
                Users
            </NavLink>

        </div>
    )
}

export default Navbar
