import Home from '../pages/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Checkout from '../pages/Checkout'
import OrderSuccess from '../pages/OrderSuccess'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route element={<ProtectedRoute />} >
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/success' element={<OrderSuccess />} />
                </Route>

            </Routes>
        </div>
    )
}

export default AppRoutes
