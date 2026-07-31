import { useInfiniteQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movieService"

export function useInfiniteSearchMovies(query) {
    return useInfiniteQuery({
        queryKey: ["search", query],
        queryFn: ({ pageParam }) => searchMovies(query, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastpage) => {
            if (lastpage.page < lastpage.total_pages) {
                return lastpage.page + 1
            }
            return undefined
        },
        enabled: query?.length >= 2,
        staleTime: 1000 * 30,
    })
}