import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    const active = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer font-semibold m-4"
    const notActive = "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition cursor-pointer font-semibold m-4"

    return (
        <nav className='fixed top-0 z-10 bg-gray-500 w-full p-4'>

            <NavLink to="/"
                className={({ isActive }) => isActive ? `${active}` : `${notActive} `} >
                Home
            </NavLink>

            <NavLink to="/postpagination"
                className={({ isActive }) => isActive ? `${active}` : `${notActive}`} >
                Post Pagination
            </NavLink>

            <NavLink to="/postinifinitescroll"
                className={({ isActive }) => isActive ? `${active}` : `${notActive}`} >
                Post Infinite Scroll
            </NavLink>

        </nav>
    )
}

export default Navbar
