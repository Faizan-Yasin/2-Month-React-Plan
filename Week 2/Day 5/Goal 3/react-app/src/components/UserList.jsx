import React from 'react'
import { useState, useEffect } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        async function fetchData() {
            try {
                setIsLoading(true)
                setUsers([])
                setError("")
                await new Promise(resolve => setTimeout(resolve, 1000))
                const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
                if (!response.ok) {
                    throw new Error("Faild to Fetch User Data")
                }
                const data = await response.json()
                setUsers(data)
            }
            catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message)
                }
            }
            finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [])

    if (isloading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    if (users.length === 0) {
        return <h1>User Not Found</h1>
    }

    return (
        <div>
            {users.map((value) => {
                return (
                    <div key={value.id}>
                        <h1>Name : {value.name}</h1>
                        <h2>Email : {value.email}</h2>
                        <h3>City: {value.address.city}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList
