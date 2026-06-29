import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      {/* {count && <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>} */}

      {count>0 && <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>}

      {/* {!!count && <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>} */}
    </div>
  )
}

export default App
