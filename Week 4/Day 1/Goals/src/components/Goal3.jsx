import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import "../components/Goal2.css"
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from './NotFound'

const Goal3 = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" className={({ isActive }) => (
                    isActive ? "active" : "nonActive"
                )}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => (
                    isActive ? "active" : "nonActive"
                )}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (
                    isActive ? "active" : "nonActive"
                )}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Goal3
