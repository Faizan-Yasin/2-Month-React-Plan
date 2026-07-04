import React from 'react'
import useDebounce from '../hooks/useDebounce'
import { useState } from 'react'
import useUsers from '../hooks/useUsers'

const Goal3 = () => {
    const [search, setSearch] = useState("")
    const { debounceValue } = useDebounce(search)
    const { usersData, loading, error } = useUsers(debounceValue ? `https://jsonplaceholder.typicode.com/${debounceValue}` : "", search)

    if (loading) {
        return (
            <div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
                <h1>Error: {error.message}</h1>
            </div>
        )
    }
    return (
        <>
            <div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
            </div>
            <div>
                {search === "users" &&

                    usersData.map(user => (
                        <div key={user.id}>
                            <h1>User Name : {user.name}</h1>
                            <h2>User Email : {user.email}</h2>
                            <h3>User Phone Number : {user.phone}</h3>
                        </div>
                    ))

                }

                {search === "posts" &&

                    usersData.map(user => (
                        <div key={user.id}>
                            <h1>Post Title : {user.title}</h1>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Goal3
