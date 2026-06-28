import React from 'react'
import Fetch from './components/Fetch'
import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {show && <Fetch />}
      <button onClick={() => setShow(prev => !prev)}> {show ? "Hide Me" : "Show Me"}</button>
    </div >
  )
}

export default App
