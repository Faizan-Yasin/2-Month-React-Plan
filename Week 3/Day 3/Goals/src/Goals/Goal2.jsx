import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

const Goal2 = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>
            <h1>{theme ? "Light" : "Dark"}</h1>
            <button onClick={() => setTheme(prev => !prev)}>Toggle Theme</button>
        </div>
    )
}

export default Goal2
