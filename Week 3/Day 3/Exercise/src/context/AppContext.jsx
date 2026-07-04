import React from 'react'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)
    const user = {
        id: 1,
        name: "Faizan",
        role: "Admin",
    }
    function toggleTheme() {
        setTheme(prev => !prev)
    }
    return (
        <AppContext.Provider value={{theme, toggleTheme, user}}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useApp must used with in the Provider")
    }

    return context
}

