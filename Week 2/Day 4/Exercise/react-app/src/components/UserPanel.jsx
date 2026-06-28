import React from 'react'
import { useEffect, useState } from 'react'

const UserPanel = (props) => {
    const [isloading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")
    useEffect(() => {
        const controller = new AbortController()
        async function fetchData() {
            try {
                setIsLoading(true)
                setError("")
                setUser(null)
                await new Promise(resolve => setTimeout(resolve, 3000))
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`, { signal: controller.signal })
                if (!response.ok) {
                    throw new Error("Failed to Fetch User Data")
                }
                const data = await response.json()
                setUser(data)
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
    }, [props.userId])
    if (isloading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>)
    }
    else if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>User Name : {user.name}</h1>
                <h2>User Email : {user.email}</h2>
                <h3>User Address : {user.address.city}</h3>
            </div>
        )
    }
}

export default UserPanel
