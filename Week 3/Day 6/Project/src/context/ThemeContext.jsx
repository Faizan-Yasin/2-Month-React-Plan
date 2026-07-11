import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}


export { useTheme, ThemeProvider }

