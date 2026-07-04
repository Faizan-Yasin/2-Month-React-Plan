import React from 'react'
import useFetch from '../hooks/useFetch'

const Posts = () => {
    const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts")

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
                <button onClick={refetch}>Refetch Post Data</button>
            </div>
        )
    }
    return (
        <div>
            <button onClick={refetch}>Refetch Post Data</button>
            {data.map((post) => (
                <div key={post.id}>
                    <h1>Post Title : {post.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default Posts
