import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { user, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/login")
    }

    return (
        <div>
            <h3>{user?.name}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar
