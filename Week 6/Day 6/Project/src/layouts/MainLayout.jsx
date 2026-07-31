import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <div className='min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-200 transition'>
            <Navbar />
            <main className="flex-1 w-full">
                <div className="sm:max-w-[95%] max-w-[90%] mx-auto px-2 py-8">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
