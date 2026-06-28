import React from 'react'
import Resize from './components/Resize'
import { useState } from 'react'

const App = () => {
  const [show,setShow] = useState(false)
  return (
    <div>
      {show && <Resize/>}
      <button onClick={()=> setShow(prev => !prev)}>{show ? "Hide Me" : "Show Me"}</button>
    </div>
  )
}

export default App
