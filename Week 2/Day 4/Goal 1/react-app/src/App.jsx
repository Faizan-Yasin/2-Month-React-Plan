import React from 'react'
import Main from './components/Main'
import { useState } from 'react'

const App = () => {
  const [show,setShow] = useState(false)
  return (
    <div>
      {show && <Main/>}
      <button onClick={()=> setShow(prev => !prev)}>{show ? "Hide Me" : "Show Me"}</button>
    </div>
  )
}

export default App
