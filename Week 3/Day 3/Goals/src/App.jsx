import { useState } from 'react'
import Goal1 from './Goals/Goal1'
import Goal2 from './Goals/Goal2'
import Goal3 from './Goals/Goal3'
import Goal4 from './Goals/Goal4'
import ThemeContext from './context/ThemeContext'
import CounterContext from './context/CounterContext'
import ThemeProvider from './hooks/useTheme'

const App = () => {
  const [theme, setTheme] = useState(true)
  const [count, setCount] = useState(0)

  function handleDelete(id) {
    console.log(`${id} id Todo Item Deleted`);
  }

  return (
    <div>
      <Goal1 handleDelete={handleDelete} />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Goal2 />
      </ThemeContext.Provider>
      <CounterContext.Provider value={{ count, setCount }}>
        <Goal3 />
      </CounterContext.Provider>
      <ThemeProvider>
        <Goal4 />
      </ThemeProvider>
    </div>
  )
}

export default App
