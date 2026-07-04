import React from 'react'
import { useTheme } from '../hooks/useTheme'

const Goal4 = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <h1>{theme ? "Light" : "Dark"}</h1>
            <button onClick={() => setTheme(prev => !prev)}>Toggle Theme</button>
        </div>
    )
}

export default Goal4
