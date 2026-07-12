import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    function handleLogin() {
        navigate(location.state?.from?.pathname || "/dashboard")
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
