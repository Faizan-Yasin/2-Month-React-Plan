import React from 'react'
import { useUser } from '../context/UserContext'
import { useApp } from '../context/AppContext'

const Navbar = () => {
    console.log("Navbar Render")
    const { user } = useUser()
    // const { user } = useApp()
    return (
        <div>
            <h1>Welcome, {user.name}</h1>
        </div>
    )
}

export default Navbar
