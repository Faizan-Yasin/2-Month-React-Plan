import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'

const Posts = () => {

    const { id } = useParams()

    const { data: posts, loading, error } = useFetchData(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h3>Total Posts : {posts.length}</h3>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>Post Title : {post.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Posts
