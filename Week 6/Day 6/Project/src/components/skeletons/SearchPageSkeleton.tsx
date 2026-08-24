import Skeleton from "react-loading-skeleton"
import MovieGridSkeleton from "./MovieGridSkeleton"
import { useSearchParams } from "react-router"

const SearchPageSkeleton = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    return (
        <div>

            <div className="mb-8">
                <Skeleton
                    width="100%"
                    height={58}
                    borderRadius={12}
                />
            </div>

            {query.trim() && <MovieGridSkeleton />}
        </div>
    )
}

export default SearchPageSkeleton