import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../features/theme/themeSlice'

const ThemeToggle = () => {

    const mode = useSelector((state) => state.theme.mode)
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(toggleTheme())}
            className='cursor-pointer transition hover:bg-gray-500 rounded p-2 active:scale-90 hover:text-white'
        >
            {mode === "light" ? (<Moon />) : (<Sun />)}
        </button>
    )
}

export default ThemeToggle
