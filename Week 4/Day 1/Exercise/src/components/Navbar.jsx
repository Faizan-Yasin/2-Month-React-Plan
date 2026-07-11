import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Contact</NavLink>
                <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Team</NavLink>
            </nav>
        </div>
    )
}

export default Navbar
