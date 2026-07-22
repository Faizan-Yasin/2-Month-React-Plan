import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

    const theme = useSelector((state) => state.theme.mode)

    return (
        <footer className={`${theme === "light" ? "bg-gray-700 text-white" : "bg-white text-black"} w-screen fixed bottom-0 z-10 shadow-md`}>

            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-4 shadow-xl'>

                <h2 className='text-xl font-semibold'>© {new Date().getFullYear()} Sky Store All rights reserved.</h2>

            </div>

        </footer >

    )
}

export default Footer
