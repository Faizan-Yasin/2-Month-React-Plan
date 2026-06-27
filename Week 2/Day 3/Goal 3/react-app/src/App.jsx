import React, { use } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function Increase3() {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  function Decrease3() {
    if (count !== 3 && count !== 0) {
      setCount(prev => prev - 1)
      setCount(prev => prev - 1)
      setCount(prev => prev - 1)
    }
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Increase3}>
        Increase 3
      </button>
      <button onClick={Decrease3}>
        Increase Decrease3
      </button>
    </div>
  )
}

export default App
