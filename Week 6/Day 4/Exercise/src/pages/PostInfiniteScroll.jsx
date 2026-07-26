import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getPostsInfinite } from '../api/postService'
import Spinner from '../components/Spinner'

const PostInfiniteScroll = () => {

  const { data, isLoading, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["postsInfinite"],
    queryFn: getPostsInfinite,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined
      return pages.length + 1
    }
  })

  function handleScroll() {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    if (bottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  useEffect(() => {
    window.history.scrollRestoration = "auto";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, isFetchingNextPage]);

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
      {
        data.pages.flat().map(post => (
          <div key={post.id} className='bg-gray-600 text-xl p-4 m-4 cursor-pointer hover:scale-100 transition rounded-md'>
            <h3>Post Id : {post.id}</h3>
            <h3>Post Title : {post.title}</h3>
          </div>
        ))}


      {/* <div className='flex justify-center items-center mt-2'>
        <button onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage || !hasNextPage}
          className='bg-amber-500 flex items-center gap-2 hover:bg-amber-600 rounded transition px-4 py-2 font-semibold active:scale-95 m-4 cursor-pointer disabled:opacity-60'
        >
          {isFetchingNextPage && <span className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent'></span>}
          {isFetchingNextPage ? "Loading..." : hasNextPage ? "Load More" : "No More Posts"}</button>
      </div> */}
      <div className='flex justify-center items-center mt-2'>
        {
          (isFetchingNextPage || !hasNextPage) &&
          <span
            className='bg-amber-500 flex items-center gap-2 rounded transition px-6 py-1 font-semibold m-4'
          >
            {isFetchingNextPage && <span className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent'></span>}
            {isFetchingNextPage ? "Fetching..." : !hasNextPage && "No More Posts"}</span>
        }
      </div>
    </div>
  )
}

export default PostInfiniteScroll
