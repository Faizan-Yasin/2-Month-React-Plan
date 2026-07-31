import React from 'react'
import { useParams } from 'react-router'
import { getBackdrop, getPoster } from '../utils/image'
import { formatRuntime } from '../utils/formatRuntime'
import { formatDate } from '../utils/formatDate'
import { useMovie } from '../hooks/useMovie'
import { useMovieVideos } from '../hooks/useMovieVideos'
import { useMovieCredits } from '../hooks/useMovieCredits'
import { useSimilarMovies } from '../hooks/useSimilarMovies'
import { Link } from 'react-router'
import CastCard from '../components/CastCard'
import MovieGrid from '../components/MovieGrid'
import { motion } from 'framer-motion'

const MovieDetail = () => {

  const { id } = useParams()
  const { data } = useMovie(id)
  const { data: videos } = useMovieVideos(id)
  const { data: credits } = useMovieCredits(id)
  const { data: similar } = useSimilarMovies(id)

  const trailer = videos?.results.find((video) => video.site === "YouTube" && video.type === "Trailer")

  return (

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-200">

      <div className="relative h-112.5">

        <img src={getBackdrop(data?.backdrop_path)} alt={data?.title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end">

          <div className="px-6 pb-6">

            <h1 className="md:text-5xl text-3xl font-bold text-gray-100">{data?.title}</h1>

            <div className="flex items-center gap-6 mt-4 text-lg text-gray-200">

              <span className="text-yellow-400">⭐ {data?.vote_average.toFixed(1)}</span>
              <span>{formatDate(data?.release_date)}</span>
              <span>{formatRuntime(data?.runtime)}</span>

            </div>

          </div>

        </div>

      </div>

      <div className="p-4">

        <div className="flex flex-col md:flex-row gap-10">

          <img src={getPoster(data?.poster_path)} alt={data?.title} className="w-72 rounded-xl shadow-2xl object-cover" />

          <div className="flex-1 text-gray-800 dark:text-gray-300">

            <h2 className="text-3xl font-bold mb-4">Overview</h2>

            <p className="leading-8 text-justify">{data?.overview}</p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Genres</h2>

            <div className="flex flex-wrap gap-3">
              {data?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-2 rounded-lg cursor-pointer font-semibold bg-gray-300 text-gray-800 dark:bg-zinc-800 dark:text-gray-300"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-4">
              Production Companies
            </h2>

            <div className="space-y-2">
              {data?.production_companies.map((company) => (
                <p key={company.id} className="text-gray-800 dark:text-gray-300 mb-2">
                  {company.name}
                </p>
              ))}
            </div>

            {
              trailer &&
              <Link to={`https://www.youtube.com/watch?v=${trailer.key}`} target='_blank' rel="noopener noreferrer"
                className='inline-block bg-red-500 text-white font-semibold hover:bg-red-600 px-5 py-2 rounded-lg my-2 active:scale-x-95 transition duration-300'>▶ Watch Trailer</Link>
            }

          </div>

        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Cast</h2>

        <div className='flex gap-5 overflow-x-auto pb-4'>
          {credits?.cast.slice(0, 20).map(actor => (

            <CastCard key={actor.id} actor={actor} />

          ))}
        </div>

        {similar?.results?.length > 0 && (

          <div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Similar Movies </h2>
            <MovieGrid movies={similar.results.slice(0, 10)} />

          </div>

        )}

      </div>

    </motion.div>
  )
}

export default MovieDetail
