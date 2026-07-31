import { useEffect, useState } from "react"
import { useInfiniteSearchMovies } from "../hooks/useInfiniteSearchMovies"
import MovieGrid from "../components/MovieGrid"
import { useDebounce } from '../hooks/useDebounce'
import { useSearchParams } from 'react-router'
import { useInView } from 'react-intersection-observer'
import { IoSearch } from "react-icons/io5"
import MovieGridSkeleton from "../components/skeletons/MovieGridSkeleton"
import { motion } from 'framer-motion'

const SearchPage = () => {

    const { ref, inView } = useInView({
        rootMargin: "300px",
    })
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") || ""
    const debouncedQuery = useDebounce(query);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useInfiniteSearchMovies(debouncedQuery)
    const movies = data?.pages.flatMap(page => page.results) || []

    useEffect(() => {
        window.history.scrollRestoration = "auto";
    }, [])

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [hasNextPage, inView, fetchNextPage, isFetchingNextPage])

    return (

        <div>

            <h2 className='text-3xl font-bold mb-8'>

                Search Movies

            </h2>

            <div className="relative">
                <IoSearch
                    className="absolute left-4 top-[35%] font-semibold text-2xl -translate-y-1/2 text-gray-600 dark:text-gray-200"
                />

                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        const value = e.target.value
                        if (value.trim()) {
                            setSearchParams({
                                query: value,
                            })
                        }
                        else {
                            setSearchParams({})
                        }
                    }}
                    className="pl-13 font-semibold w-full px-5 py-4 rounded-xl bg-white dark:bg-zinc-900 border text-gray-600 dark:text-gray-200 border-gray-200 dark:border-zinc-700 outline-none mb-8"
                />
            </div>

            {isLoading && <MovieGridSkeleton />}

            {query.trim() !== debouncedQuery.trim() && (<p className="mt-2 text-gray-600 font-semibold dark:text-gray-200 mb-4">Typing...</p>)}

            {debouncedQuery.length >= 2 && movies.length === 0 && !isLoading && query.trim() === debouncedQuery.trim() && (

                <div className="text-center py-16 flex justify-center items-center flex-col">
                    <img src="/logo.svg" alt="logo" className='w-8' />

                    <h3 className="text-2xl font-semibold mt-4">
                        No Movies Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Try another movie title.
                    </p>
                </div>

            )}

            {!isLoading && movies.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <MovieGrid movies={movies} />
                </motion.div>
            )}

            {isFetchingNextPage && <MovieGridSkeleton />}

            <div ref={ref} className="py-6" />

            {!hasNextPage && movies.length > 0 && (
                <p className="text-center text-gray-600 font-semibold dark:text-gray-200">
                    No more movies.
                </p>
            )}

        </div>
    )
}

export default SearchPage