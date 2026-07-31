import React from 'react'
import { useFavouriteStore } from '../store/favouriteStore'
import MovieGrid from '../components/MovieGrid'
import { motion } from 'framer-motion'

const FavouritesPage = () => {

    const { favourites } = useFavouriteStore()

    if (favourites.length === 0) {

        return (

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col items-center justify-center py-20'>

                <h2 className='text-3xl font-bold'>❤️</h2>

                <p className='text-gray-400 mt-4'>No favourite movies yet.</p>

            </motion.div>

        )

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <h2 className='text-3xl font-bold mb-8'>

                Favourite Movies

            </h2>

            <MovieGrid movies={favourites} />

        </motion.div>
    )
}

export default FavouritesPage
