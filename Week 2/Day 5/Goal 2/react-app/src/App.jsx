import React from 'react'

const App = () => {
  const users = [
    {
      id: 1,
      name: "Faizan",
      city: "Rawalpindi"
    },
    {
      id: 2,
      name: "Ali",
      city: "Islamabad"
    },
    {
      id: 1,
      name: "Abdullah",
      city: "Karachi"
    },
  ]
  return (
    <div>
      {/* {users.map((value, index) => {
        return (
          <div key={index}>
            <h1>Name : {value.name}</h1>
            <h2>City : {value.city}</h2>
          </div>
        )
      })} */}
      
      {users.map((value) => {
        return (
          <div key={value.id}>
            <h1>Name : {value.name}</h1>
            <h2>City : {value.city}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App
