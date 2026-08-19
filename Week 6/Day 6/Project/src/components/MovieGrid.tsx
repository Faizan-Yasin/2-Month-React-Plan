import { MovieGridProps } from "../types/tmdb"
import MovieCard from "./MovieCard"
import { Link } from 'react-router'

const MovieGrid = ({ movies }: MovieGridProps) => {

    return (

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {movies.map((movie,index) => (

                <Link key={`${movie.id}-${index}`} to={`/movie/${movie.id}`} className='block'>
                    <MovieCard movie={movie} />
                </Link>

            ))}

        </div>
    )
}

export default MovieGrid