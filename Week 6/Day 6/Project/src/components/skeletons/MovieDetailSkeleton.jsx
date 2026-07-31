import Skeleton from "react-loading-skeleton"

const MovieDetailSkeleton = () => {

    return (

        <div className="max-w-7xl mx-auto p-6">

            <Skeleton height={500} />

             <div className="p-4">

                <div className="flex flex-col md:flex-row gap-10">

                    <Skeleton width={288} height={430} borderRadius={16}/>

                    <div className="flex-1">

                        <Skeleton width={180} height={35} />

                        <Skeleton count={5} className="mt-4" />

                        <Skeleton width={120} height={30} className="mt-8 mb-4" />

                        <div className="flex flex-wrap gap-3">
                            <Skeleton width={80} height={40} borderRadius={8} />
                            <Skeleton width={110} height={40} borderRadius={8} />
                            <Skeleton width={95} height={40} borderRadius={8} />
                        </div>

                        <Skeleton width={250} height={30} className="mt-8 mb-4" />

                        <Skeleton width="70%" height={20} />
                        <Skeleton width="55%" height={20} className="mt-2" />
                        <Skeleton width="60%" height={20} className="mt-2" />

                        <Skeleton width={170} height={45} borderRadius={8} className="mt-8"/>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MovieDetailSkeleton