import React from 'react'
import { useState } from 'react'

const App = () => {
  const students = {
    name: "Ali",
    age: 19
  }
  const [user, setUser] = useState(students)
  function handeChangeIncrease() {
    setUser({ ...user, age: user.age + 1 })
  }
  function handeChangeDecrease() {
    if (user.age !== 1) {
      setUser({ ...user, age: user.age - 1 })
    }
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={handeChangeIncrease}>
        Increase Age
      </button>
      <button onClick={handeChangeDecrease}>
        Decrease Age
      </button>
    </div>
  )
}

export default App
