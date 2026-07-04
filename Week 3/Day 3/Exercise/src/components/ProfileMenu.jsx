import React from 'react'
import { useUser } from '../context/UserContext'
import { useApp } from '../context/AppContext'

const ProfileMenu = () => {
    console.log("ProfileMenu Render")
    const { user } = useUser()
    // const { user } = useApp()
    return (
        <div>
            <h1>Role : {user.role}</h1>
        </div>
    )
}

export default ProfileMenu
