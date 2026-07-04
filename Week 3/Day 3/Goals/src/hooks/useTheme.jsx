import React from 'react'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)
    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme must be used in ThemeProvider")
    }

    return context
}

export default ThemeProvider
