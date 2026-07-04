import React from 'react'
import useFetch from '../hooks/useFetch'
import Input from './Input'
import useDebounce from '../hooks/useDebounce'
import { useState } from 'react'
import useUserSearch from '../hooks/useUserSearch'

const Search = () => {
    const [search, setSearch] = useState("")
    const { data, loading, error, refetch, debouncedTerm } = useUserSearch(search)

    if (debouncedTerm === "") {
        return (
            <div>
                <label>Search users or posts</label>
                <Input search={search} setSearch={setSearch} />
            </div>
        )
    }
    if (loading) {
        return (
            <div>
                <label>Search users or posts</label>
                <Input search={search} setSearch={setSearch} />
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <label>Search users or posts</label>
                <Input search={search} setSearch={setSearch} />
                <h1>{error.message}</h1>
            </div>
        )
    }
    return (
        <div>
            <label>Search users or posts</label>
            <Input search={search} setSearch={setSearch} />
            {debouncedTerm === "users" && <button onClick={refetch}>Refetch User Data</button>}
            {debouncedTerm === "posts" && <button onClick={refetch}>Refetch Post Data</button>}
            {debouncedTerm === "users" && data.map((user) => (
                <div key={user.id}>
                    <h1>User Name : {user.name}</h1>
                    <h2>User Email : {user.email}</h2>
                </div>
            ))}
            {debouncedTerm === "posts" && data.map((post) => (
                <div key={post.id}>
                    <h1>Post Title : {post.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default Search
