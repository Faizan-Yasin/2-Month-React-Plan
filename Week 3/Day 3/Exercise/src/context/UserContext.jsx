/*
Context Splitting Demo

Before:
- Theme and User were stored in one context.
- Toggling theme caused all user-consuming components to re-render.

After:
- ThemeContext and UserContext are separate.
- Toggling theme only re-renders theme consumers.
- User consumers no longer re-render unnecessarily.
- This improves performance by reducing unnecessary renders.
*/

import React from 'react'
import { createContext, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const user = {
        id: 1,
        name: "Faizan",
        role: "Admin",
    }
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must used with in the Provider")
    }

    return context
}

