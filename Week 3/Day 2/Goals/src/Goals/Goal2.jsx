import React from 'react'
import useUsers from '../hooks/useUsers'

const Goal2 = () => {
    const { usersData, loading, error } = useUsers("https://jsonplaceholder.typicode.com/users")

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (error) {
        return (
            <h1>Error: {error.message}</h1>
        )
    }
    return (
        <div>
            {usersData.map(user => (
                <div key={user.id}>
                    <h1>User Name : {user.name}</h1>
                    <h2>User Email : {user.email}</h2>
                    <h3>User Phone Number : {user.phone}</h3>
                </div>
            ))}
        </div>
    )
}

export default Goal2
