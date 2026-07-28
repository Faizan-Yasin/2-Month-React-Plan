import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/postService'
import PostsSkeleton from './PostsSkeleton'
import { Link } from 'react-router'

const Posts = () => {

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    networkMode: "always",
    suspense: true,
  })

  // if (isLoading) {
  //   return (
  //     <PostsSkeleton />
  //   )
  // }

  if (error) {
    return (
      <div>
        <h2>{error.message}</h2>
        <button
          className='m-2 bg-amber-500 cursor-pointer text-white font-semibold px-4 py-1 rounded transition-transform active:scale-95'
          onClick={() => refetch()}>Retry</button>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <h2>No Posts Found</h2>
        <button
          className='m-2 bg-amber-500 cursor-pointer text-white font-semibold px-4 py-1 rounded transition-transform active:scale-95'
          onClick={() => refetch()}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      {data?.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <div className='bg-gray-600 font-semibold cursor-pointer transition hover:scale-101 text-white rounded-lg p-4 mt-2'>
            <h3>Post ID : {post.id}</h3>
            <h3>Post Title : {post.title}</h3>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default Posts
