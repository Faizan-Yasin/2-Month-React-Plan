import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from '../pages/Users'
import Home from '../pages/Home'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
