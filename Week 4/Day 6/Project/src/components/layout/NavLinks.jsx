import React from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useTheme } from "@/hooks/useTheme"

const NavLinks = ({ mobile = false, closeMenu, handleLogout }) => {

    const { user } = useAuth()
    const { theme } = useTheme()

    const activeClass = "bg-blue-600 text-white font-semibold rounded-lg px-4 py-2"

    const normalClass = `${theme === "light" ? "bg-white text-gray-700" : "bg-gray-600 text-white"} hover:bg-gray-100 hover:text-blue-600 rounded-lg px-4 py-2 transition`

    function handleClick() {

        if (mobile && closeMenu) {
            closeMenu()
        }

    }

    return (
        <>
            <NavLink
                to="/"
                onClick={handleClick}
                className={({ isActive }) => isActive ? activeClass : normalClass}>Home
            </NavLink>

            {
                !user && (
                    <>
                        <NavLink
                            to="/login"
                            onClick={handleClick}
                            className={({ isActive }) => isActive ? activeClass : normalClass}>Login
                        </NavLink>

                        <NavLink
                            to="/register"
                            onClick={handleClick}
                            className={({ isActive }) => isActive ? activeClass : normalClass}>Register
                        </NavLink>
                    </>
                )
            }

            {
                user && (
                    <>
                        <NavLink
                            to="/dashboard"
                            onClick={handleClick}
                            className={({ isActive }) => isActive ? activeClass : normalClass}>Dashboard
                        </NavLink>

                        <NavLink
                            to="/employees"
                            onClick={handleClick}
                            className={({ isActive }) => isActive ? activeClass : normalClass}>Employees
                        </NavLink>

                        {
                            user.role === "Admin" && (

                                <NavLink
                                    to="/settings"
                                    onClick={handleClick}
                                    className={({ isActive }) => isActive ? activeClass : normalClass
                                    }>Settings

                                </NavLink>

                            )

                        }

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 transition">Logout</button>
                    </>
                )
            }
        </>
    )

}

export default NavLinks