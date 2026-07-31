import Skeleton from "react-loading-skeleton"


const MovieCardSkeleton = () => {

    return (

        <div className="dark:bg-zinc-900 bg-white rounded-xl overflow-hidden">

            <Skeleton height={320} className="p-1" />

            <div className="p-4 dark:bg-zinc-800">

                <Skeleton height={20} />

                <Skeleton height={15} className="mt-3" />

            </div>

        </div>
    )
}

export default MovieCardSkeleton