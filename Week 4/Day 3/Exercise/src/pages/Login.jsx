import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

    const { login } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    async function handleLogin() {
        await login()
        navigate(location.state?.from?.pathname || "/dashboard", { replace: true })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
