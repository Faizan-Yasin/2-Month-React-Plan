import React from 'react'
import { useTrendingMovies } from '../hooks/useTrendingMovies'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

const Home = () => {

    const { data } = useTrendingMovies()

    return (
        <>
            <h2 className='text-3xl font-bold mb-8'>

                Trending Movies

            </h2>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {
                    (data?.results ?? []).map(movie => (
                        <Link key={movie.id} to={`/movie/${movie.id}`} className='block'>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                }
            </motion.div>
        </>
    )
}

export default Home
