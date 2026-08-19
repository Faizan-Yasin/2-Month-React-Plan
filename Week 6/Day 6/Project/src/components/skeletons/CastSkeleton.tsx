import Skeleton from "react-loading-skeleton"

const CastSkeleton = () => {

    return (

        <div className="flex gap-5 overflow-x-auto mx-6 mb-2">

            {

                Array.from({ length: 6 }).map((_, index) => (

                    <div className="min-w-38" key={index}>

                        <Skeleton height={220} />

                        <Skeleton height={18} className="mt-2" />

                        <Skeleton height={14} />

                    </div>

                ))

            }

        </div>
    )
}

export default CastSkeleton