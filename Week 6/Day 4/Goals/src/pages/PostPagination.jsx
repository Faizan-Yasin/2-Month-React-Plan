import React, { useEffect, useState } from 'react'
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query'
import { getPostsPagination } from '../api/postService'
import Spinner from '../components/Spinner'

const PostPagination = () => {

    const [page, setPage] = useState(1)
    const queryClient = useQueryClient()

    const { data, isLoading, error, isFetching } = useQuery({
        queryKey: ["postsPagination", page],
        queryFn: () => getPostsPagination(page),
        placeholderData: keepPreviousData,
    })

    useEffect(() => {
        if (page !== 10) {
            queryClient.prefetchQuery({
                queryKey: ["postsPagination", page + 1],
                queryFn: () => getPostsPagination(page + 1),
            })
        }
    }, [page, queryClient])


    if (isLoading) {
        return (
            <Spinner />
        )
    }

    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {data.map(post => (
                <div key={post.id} className='bg-gray-600 text-xl p-4 m-4 cursor-pointer hover:scale-100 transition rounded-md'>
                    <h3>Post Id : {post.id}</h3>
                    <h3>Post Title : {post.title}</h3>
                </div>
            ))}
            <div className='flex justify-center items-center mt-2'>
                <button onClick={() => setPage(prev => prev - 1)}
                    disabled={page === 1}
                    className='bg-amber-500 hover:bg-amber-600 rounded transition px-4 py-2 font-semibold active:scale-95 m-4 cursor-pointer disabled:opacity-60'>Previous</button>
                <h2>Page {page}</h2>
                <button onClick={() => setPage(prev => prev + 1)}
                    disabled={isFetching || page === 10}
                    className='bg-amber-500 hover:bg-amber-600 rounded transition px-4 py-2 font-semibold active:scale-95 m-4 cursor-pointer disabled:opacity-60'>Next</button>
            </div>
        </div>
    )
}

export default PostPagination
