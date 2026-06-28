import React from 'react'
import { useEffect } from 'react'

const Fetch = () => {
  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      try {
        await new Promise(resolve=> setTimeout(resolve,3000))
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
        const data = await response.json()
        console.log(data);
      }
      catch (error) {
        if (error.name === "AbortError") {
          console.log("Request Cancel")
        }
        else {
          console.log(error)
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }
    , [])
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Fetch
