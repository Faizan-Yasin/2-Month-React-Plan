import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)

  function handleChange(){
    setCount(count+1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleChange}>
        Increment
      </button>
    </div>
  )
}

export default App
