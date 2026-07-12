import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Navbar</h2>
            <NavLink to="/books" className={({ isActive }) => (isActive ? "link-active" : "link-not-active")}>
                <h2>Books</h2>
            </NavLink>
            <NavLink to="/files/doc/reactjs" className={({ isActive }) => (isActive ? "link-active" : "link-not-active")}>
                <h2>React Files</h2>
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "link-active" : "link-not-active")}>
                <h2>Products</h2>
            </NavLink>
        </div>
    )
}

export default Navbar
