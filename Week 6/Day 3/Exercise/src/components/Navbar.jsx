import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>

                <NavLink to="/" className={({ isActive }) => {
                    return isActive ? "active" : "notActive"
                }}>Home</NavLink>

                <NavLink to="/users" className={({ isActive }) => {
                    return isActive ? "active" : "notActive"
                }}>Users</NavLink>

            </nav>
        </div>
    )
}

export default Navbar
