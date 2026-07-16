import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import NavLinks from './NavLinks'
import { Bounce, toast } from "react-toastify";
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {

  const { theme } = useTheme()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  function handleLogout() {
    logout()
    toast.success('Logout Successfully ✅ ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    navigate("/", { replace: true })
  }

  function menu() {
    setOpen(prev => !prev)
  }

  return (
    <nav className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} shadow-md`}>
      <div className='max-w-full px-3 mx-6'>
        <div className='flex justify-between items-center h-16'>

          <button onClick={menu} className='md:hidden text-3xl semi-bold'>{!open && "☰"}</button>

          <div className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl z-50 transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} `}>

            <div className="flex justify-end p-4">
              <button onClick={() => setOpen(false)} className="text-3xl">✕</button>
            </div>

            <div className="flex flex-col gap-4 p-6">
              <NavLinks
                mobile={true}
                closeMenu={() => setOpen(false)}
                handleLogout={handleLogout}
              />
            </div>

          </div>

          <Link to="/" className={`${theme === "light" ? "bg-white text-blue-600" : "bg-gray-600 text-white"} mx-auto md:mx-0 text-2xl font-bold`}>Employee Portal</Link>

          <div className="hidden md:flex items-center gap-4">

            <NavLinks
              handleLogout={handleLogout}
            />

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
