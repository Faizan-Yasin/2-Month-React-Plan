import Skeleton from "react-loading-skeleton"

const NotFoundSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Skeleton
                width={250}
                height={80}
            />

            <Skeleton
                width={160}
                height={24}
                className="mt-4"
            />

            <Skeleton
                width={120}
                height={48}
                borderRadius={10}
                className="mt-4"
            />
        </div>
    )
}

export default NotFoundSkeleton