import React from 'react'
import { useState, useEffect } from 'react'
import UserCard from './UserCard'

const UserDirectory = () => {
    const [users, setUsers] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [retry, setRetry] = useState(0)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData() {
            try {
                setIsLoading(true)
                setError("")
                await new Promise(resolve => setTimeout(resolve, 2000))
                const response = await fetch("https://jsonplaceholder.typicode.com/users/", { signal: controller.signal })
                if (!response.ok) {
                    throw new Error("Failed To Fetch User Data")
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
    }, [retry])

    const filteredUser = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()))

    if (isloading) {
        return (
            <div>
                {[1, 2, 3].map(row => (
                    <div key={row} style={{ height: "70px", background: "#ddd", margin: "10px", animation: "pulse 1s infinite" }}>
                    </div>))}
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h1>Error : {error}</h1>
                <button onClick={() => setRetry(prev => prev + 1)}>Retry</button>
            </div>
        )
    }
    if (users.length === 0) {
        return <h1>User Not Found</h1>
    }
    return (
        <div>
            <input type="text" placeholder='Search User' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={() => setUsers(prev => [...prev].sort((a, b) => b.name.localeCompare(a.name)))}>Sort</button>
            {filteredUser.length === 0 ? <h1>User Not Found</h1> :
                filteredUser.map((value, index) => (
                    <UserCard key={value.id} {...value} />
                    // <UserCard key={index} {...value} />

                    // index key caused identity mismatch after sorting
                    // id key preserved correct component identity
                ))}

        </div>
    )
}

export default UserDirectory
