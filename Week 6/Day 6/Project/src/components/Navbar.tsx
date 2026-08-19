import { NavLink } from "react-router"
import { FaMoon, FaSun, FaBars } from "react-icons/fa"
import { useThemeStore } from "../store/themeStore"
import { useState, useEffect } from "react"
import NavLinks from "./NavLinks"

const Navbar = () => {

    const { theme, toggleTheme } = useThemeStore()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {

        if (menuOpen) {
            document.body.style.overflow = "hidden"
        }

        else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }

    }, [menuOpen])

    return (
        <>

            <nav className='sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-lg shadow-gray-300 dark:shadow-gray-700'>

                <div className='max-w-screen flex items-center justify-between px-12 py-2'>

                    <NavLink to="/" className='flex items-center gap-2 text-2xl font-bold text-red-500 hover:text-red-600 transition'>

                        <img src="/logo.svg" alt="logo" className='w-8' />

                        <span className="mr-10 sm:mr-0">MovieBrowser</span>

                    </NavLink>

                    <div className='flex items-center gap-4'>

                        <div className='hidden md:flex items-center gap-4'>

                            <NavLinks />

                        </div>

                        <button className="cursor-pointer hover:bg-red-100 p-2 dark:hover:bg-zinc-800 rounded-full active:scale-90 transition" onClick={toggleTheme}>

                            {
                                theme === "dark"
                                    ? <FaSun className='text-yellow-400 text-xl' />
                                    : <FaMoon className='text-black text-xl' />
                            }

                        </button>

                        <button onClick={() => setMenuOpen(true)}
                            className='md:hidden text-2xl text-black dark:text-white'>

                            <FaBars />

                        </button>

                    </div>

                </div>

            </nav>

            {
                menuOpen && (

                    <div onClick={() => setMenuOpen(false)}
                        className='fixed inset-0 bg-black/50 z-50' />

                )
            }

            <div
                className={`fixed top-0 right-0 h-screen w-72

                bg-white dark:bg-black shadow-lg shadow-gray-300 dark:shadow-gray-700 z-50 transform

                transition-transform duration-500 ease-in-out

                ${menuOpen ? "translate-x-0" : "translate-x-full"}`} >

                <div className='flex justify-between items-center px-6 py-4 shadow-lg shadow-gray-300 dark:shadow-gray-700'>

                    <h2 className='text-xl font-bold text-red-500'>Menu</h2>

                    <button onClick={() => setMenuOpen(false)} className='text-2xl font-bold'>✕</button>

                </div>

                <div className='flex flex-col gap-4 p-6'>

                    <NavLinks mobile={true} closeMenu={() => setMenuOpen(false)} />

                </div>

            </div>

        </>

    )

}

export default Navbar