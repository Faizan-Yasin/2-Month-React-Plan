import React from 'react'
import { useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(true)
    return (
        <div style={{ background: theme ? "white" : "black", color: theme ? "black" : "white", minHeight:"100vh", padding:"20px"}}>
            <h1>Theme : {theme ? "Light" : "Dark"}</h1>
            <button onClick={() => setTheme(!theme)}>Toggle</button>
        </div>
    )
}

export default ThemeToggle
