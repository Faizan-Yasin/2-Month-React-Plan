import React from 'react'
import UserPanel from './components/UserPanel'
import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import Resize from './components/Resize'
import TextArea from './components/TextArea'

const App = () => {
  const [show, setShow] = useState(false)
  const [userId, setUserId] = useState(1)

  return (
    <div>
      {show && <UserPanel userId={userId} />}
      <button onClick={() => setShow(prev => !prev)}>{show ? "Hide Me" : "Show Me"}</button>
      {show && <button onClick={() => setUserId(1)}>Fetch User Id 1 Data</button>}
      {show && <button onClick={() => setUserId(2)}
      >Fetch User Id 2 Data</button>}
      {show && <Counter />}
      {show && <Resize />}
      {show && <TextArea />}
    </div>
  )
}

export default App
