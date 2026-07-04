import React from 'react'
import useToggle from '../hooks/useToggle'

const Theme = () => {
    const [darkMode, toggleTheme] = useToggle(false)
    return (
        <div>
            <h1>Theme : {darkMode ? "Dark" : "Light"}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Theme
