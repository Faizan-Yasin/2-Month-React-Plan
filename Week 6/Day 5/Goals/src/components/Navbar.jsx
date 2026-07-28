import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    const active = "inline-block mx-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded transition-transform active:scale-95"

    const notActive = "inline-block mx-2 bg-gray-200 text-black font-semibold px-4 py-2 rounded transition-transform active:scale-95"

    return (
        <div>
            <nav className='w-screen p-4 bg-gray-600'>

                <NavLink to={"/"} className={({ isActive }) => isActive ? `${active}` : `${notActive}`}>Home</NavLink>
                <NavLink to={"/posts"} className={({ isActive }) => isActive ? `${active}` : `${notActive}`}>Posts</NavLink>

            </nav>
        </div>
    )
}

export default Navbar
