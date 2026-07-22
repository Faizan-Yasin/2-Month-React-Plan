import React from 'react'
import SearchBar from './searchBar'
import ThemeToggle from './ThemeToggle'
import { ShoppingCart } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTotalItems } from '../../selectors/totalProductsSelector'
import { toggleCart } from '../../features/ui/uiSlice'

const Navbar = () => {

    const totalItems = useSelector(selectTotalItems)
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.mode)

    return (
        <header className={`${theme === "light" ? "bg-gray-700 text-white" : "bg-white text-black"} sticky top-0 z-10 shadow-md`}>

            <div className="w-full mx-auto p-4">

                <div className="flex flex-col md:flex-row md:items-center gap-4">

                    <div className="flex items-center justify-between md:justify-start">

                        <div className="flex items-center gap-2">

                            <img
                                src="/favicon.svg"
                                alt="Logo"
                                className="w-6 h-6"
                            />

                            <h1 className="text-2xl font-bold">
                                Sky Store
                            </h1>

                        </div>

                        <div className="flex md:hidden items-center gap-4">

                            <ThemeToggle />

                            <div
                                onClick={() => dispatch(toggleCart())}
                                className="relative cursor-pointer"
                            >
                                <ShoppingCart />

                                <span className="absolute -top-2 -right-2 md:-top-1 md:-right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                    {totalItems}
                                </span>
                            </div>

                        </div>

                    </div>


                    <div className="flex-1">
                        <SearchBar />
                    </div>

                    <div className="hidden md:flex items-center gap-4">

                        <ThemeToggle />

                        <div
                            onClick={() => dispatch(toggleCart())}
                            className="relative cursor-pointer hover:bg-gray-500 hover:text-white rounded-lg p-2 transition"
                        >
                            <ShoppingCart />

                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                {totalItems}
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </header>
    )
}

export default Navbar