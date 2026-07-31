import { NavLink } from "react-router"

const NavLinks = ({ mobile = false, closeMenu }) => {

    function handleClick() {

        if (mobile && closeMenu) {
            closeMenu()
        }

    }

    return (
        <>
            <NavLink to="/" onClick={handleClick}
                className={({ isActive }) => isActive ? "bg-red-500 dark:bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-lg active:scale-95 transition font-bold" : "hover:text-red-600 hover:bg-red-100 dark:hover:bg-zinc-800 dark:hover:text-white text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg active:scale-95 text-lg transition font-semibold"}>
                Home
            </NavLink>

            <NavLink to="/search" onClick={handleClick}
                className={({ isActive }) => isActive ? "bg-red-500 dark:bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-lg active:scale-95 transition font-bold" : "hover:text-red-600 hover:bg-red-100 dark:hover:bg-zinc-800 dark:hover:text-white text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg active:scale-95 text-lg transition font-semibold"}>
                Search
            </NavLink>

            <NavLink to="/favourites" onClick={handleClick}
                className={({ isActive }) => isActive ? "bg-red-500 dark:bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-lg active:scale-95 transition font-bold" : "hover:text-red-600 hover:bg-red-100 dark:hover:bg-zinc-800 dark:hover:text-white text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg active:scale-95 text-lg transition font-semibold"}>
                Favourites
            </NavLink>

        </>
    )
}

export default NavLinks