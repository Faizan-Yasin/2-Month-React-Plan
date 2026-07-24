import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Users from '../pages/Users'
import UserDetail from '../pages/UserDetail'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/userDetail/:id' element={<UserDetail />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
