import React from 'react'
import { getPoster } from '../utils/image'
import { formatDate } from '../utils/formatDate'
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { useFavouriteStore } from '../store/favouriteStore'
import { toast } from 'react-toastify'

const MovieCard = ({ movie }) => {

    const { toggleFavourite, isFavourite } = useFavouriteStore()

    return (
        <div className='bg-white text-gray-600 dark:bg-zinc-800 dark:text-gray-300 relative rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer'>
            <img className='w-full h-80 transition-transform duration-300 hover:scale-105' src={getPoster(movie.poster_path)} alt={movie.title} loading="lazy" onError={(e) => {
                e.target.src = "/placeholder.png"
            }} />
            <button onClick={
                (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleFavourite(movie)
                    isFavourite(movie.id) ? toast.success("Added To Favourites ❤️") : toast.error("Removed From Favourites 💔")
                }
            }
                className='absolute top-3 right-3 bg-black/70 cursor-pointer hover:bg-black transition p-2 rounded-full'
            >

                {

                    isFavourite(movie.id) ? <FaHeart className='text-red-500 text-xl' /> :

                        <FaRegHeart className='text-gray-200 dark:text-gray-300 text-xl' />

                }

            </button>
            <div className='p-4'>
                <h3 className='text-gray-600 dark:text-gray-300 font-bold text-lg truncate'>{movie.title}</h3>
                <div className='flex justify-between items-center mt-3 text-gray-400 text-sm'>
                    <span>⭐ {(movie.vote_average)?.toFixed(1)}</span>
                    <span>{formatDate(movie.release_date)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
