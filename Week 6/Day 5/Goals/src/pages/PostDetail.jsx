import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../api/postService'
import Skeleton from '../components/Skeleton'

const PostDetail = () => {

  const { id } = useParams()
  const { data: post, refetch, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
    networkMode: "always",
    suspense: true,
  })

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

  if (!post) {
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
    <div className='bg-gray-600 font-semibold cursor-pointer transition hover:scale-101 text-white rounded-lg p-4 mt-2'>
      <h3>Post ID : {post.id}</h3>
      <h3>Post Title : {post.title}</h3>
    </div>
  )
}

export default PostDetail
