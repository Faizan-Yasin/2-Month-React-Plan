import React, { useState } from 'react'

const App = () => {
  const [firstName,setFirstName] = useState("Rehan")
  const [lastName,setLastName] = useState("Yasin")
  // const [fullName,setFullNae] = useState("Faizan Yasin")
  const fullName = `${firstName} ${lastName}`
  return (
    <div>
      <h1>{fullName}</h1>
    </div>
  )
}

export default App
