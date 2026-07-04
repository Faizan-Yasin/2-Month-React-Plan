import React from 'react'
import useFetch from '../hooks/useFetch'
import Input from './Input'

const Users = () => {
    const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/users")

    if (loading) {
        return (
            <div>
                <Input />
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <Input />
                <h1>{error.message}</h1>
                <button onClick={refetch}>Refetch User Data</button>
            </div>
        )
    }
    return (
        <div>
            <button onClick={refetch}>Refetch User Data</button>
            {data.map((user) => (
                <div key={user.id}>
                    <h1>User Name : {user.name}</h1>
                    <h2>User Email : {user.email}</h2>
                </div>
            ))}
        </div>
    )
}

export default Users
