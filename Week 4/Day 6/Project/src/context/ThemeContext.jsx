import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export { ThemeContext, ThemeProvider }
