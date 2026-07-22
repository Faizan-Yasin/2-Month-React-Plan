import React from 'react'
import { Search } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../features/ui/uiSlice'

const SearchBar = () => {

    const search = useSelector((state) => state.ui.search)
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.mode)

    return (
        <div className={`${theme === "light" ? "bg-gray-500 text-white" : "bg-gray-200 text-black"} ml-3 relative w-full max-w-md rounded-lg`}>

            <Search className={`${theme === "light" ? "text-white" : "text-gray-500"} absolute left-3 top-3 text-gray-400`} size={18} />

            <input type="text" value={search} onChange={(e) => dispatch(setSearch(e.target.value))}
                placeholder='Search Products...'
                className='w-full font-semibold transition rounded-lg shadow pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' />

        </div>
    )
}

export default SearchBar
