import TodoApp from './Components/TodoApp'
import { useState, useEffect } from 'react'
import Profile from './Components/Profile'

const App = () => {
  const [theme, setTheme] = useState<boolean>(true)

  useEffect(() => {
    document.body.className = theme ? 'light' : 'dark'
    localStorage.setItem('theme', theme ? 'light' : 'dark')
  }, [theme])

  return (
    <div>
      <Profile />
      <TodoApp theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
