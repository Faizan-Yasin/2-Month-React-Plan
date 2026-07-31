import MovieCardSkeleton from "./MovieCardSkeleton"

const MovieGridSkeleton = () => {

    return (

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 m-4">

            {

                Array.from({ length: 10 }).map((_, index) => (

                    <MovieCardSkeleton key={index} />

                ))

            }

        </div>
    )
}

export default MovieGridSkeleton