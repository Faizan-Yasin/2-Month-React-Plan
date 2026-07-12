import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem("user")

        return storedUser ? JSON.parse(storedUser) : null
    })

    async function login() {
        await new Promise(r => setTimeout(r, 1500))

        const fakeUser = {
            id: 1,
            name: "Faizan",
            Email: "faizan@gmail.com",
            role: "admin",
        }

        setUser(fakeUser)

        sessionStorage.setItem("user", JSON.stringify(fakeUser))
    }

    function logout() {
        setUser(null)
        sessionStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within the AuthProvider")
    }

    return context
}


export { useAuth, AuthProvider }