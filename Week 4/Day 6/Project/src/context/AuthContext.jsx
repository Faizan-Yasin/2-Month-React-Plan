import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const storedUser = sessionStorage.getItem("user")
    const storedUsers = localStorage.getItem("users")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }
    else {
      localStorage.setItem("users", JSON.stringify([]))
    }

    setLoading(false)

  }, [])

  async function login(email, password) {

    setLoading(true)

    try {

      await new Promise(r => setTimeout(r, 1500))

      const foundUser = users.find(user => user.email === email && user.password === password)

      if (!foundUser) {
        return {
          success: false,
          message: "Invalid email or password"
        }
      }

      setUser(foundUser)

      sessionStorage.setItem("user", JSON.stringify(foundUser))

      return {
        success: true,
        user: foundUser,
      };

    } finally {
      setLoading(false)
    }

  }

  function logout() {

    setUser(null)

    sessionStorage.removeItem("user")

  }

  async function register(newUser) {

    const alreadyExists = users.some(user => user.email === newUser.email)

    if (alreadyExists) {
      return {
        success: false,
        message: "Email already exists!"
      }
    }

    const updatedUsers = [...users, newUser]

    setUsers(updatedUsers)

    setUser(newUser)

    sessionStorage.setItem("user", JSON.stringify(newUser))
    localStorage.setItem("users", JSON.stringify(updatedUsers))

    return {
      success: true,
      user: newUser,
    };

  }

  return (
    <AuthContext.Provider value={{ user, users, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
