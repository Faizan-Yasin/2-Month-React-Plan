import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Outlet, useNavigate } from 'react-router-dom'

const LoginRoute = () => {

    const { user } = useAuth()
    const navigate = useNavigate()

    if (user) {
        navigate("/dashboard", { replace: true })
        return
    }

    return <Outlet />
}

export default LoginRoute
