import { useQuery } from "@tanstack/react-query"
import { getMovieCredits } from "../services/movieService"

export function useMovieCredits(id) {
    return useQuery({
        queryKey: ["movie-credits", id],
        queryFn: () => getMovieCredits(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 60,
        suspense: true,
    })
}