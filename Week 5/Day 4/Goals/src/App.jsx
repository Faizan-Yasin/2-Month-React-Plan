import React from 'react'
import { useStore } from './store/store'

const unsubscribe = useStore.subscribe((state) => {
  console.log("Count Changed : ", state.count);
})

// unsubscribe()

const App = () => {

  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  const decrement = useStore((state) => state.decrement)
  const reset = useStore((state) => state.reset)
  const incrementByAmount = useStore((state) => state.incrementByAmount)
  const theme = useStore((state) => state.theme)
  const toggleTheme = useStore((state) => state.toggleTheme)

  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Theme : {theme ? "Light" : "Dark"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => incrementByAmount(5)}>Increment By 5</button>
    </div>
  )
}

export default App
