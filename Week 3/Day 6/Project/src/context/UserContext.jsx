import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    id: 1,
    name: "Faizan Yasin",
    email: "faizan@gmail.com",
    role: "Admin",
  })

  function updateUser(updatedUser) {
    setUser(prev => ({ ...prev, ...updatedUser }))
  }

  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser must be used within UserProvider")
  }

  return context
}

export { useUser, UserProvider }