import React from 'react'
import TodoApp from './Components/TodoApp'
import { useState, useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    document.body.className = theme ? 'light' : 'dark'
    localStorage.setItem('theme', theme ? 'light' : 'dark')
  }, [theme])

  return (
    <div>
      <TodoApp theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
