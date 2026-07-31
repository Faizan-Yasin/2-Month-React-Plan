import { useQuery } from "@tanstack/react-query"
import { getSimilarMovies } from "../services/movieService"

export function useSimilarMovies(id) {
    return useQuery({
        queryKey: ["similar-movies", id],
        queryFn: () => getSimilarMovies(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 30,
        suspense: true,
    })
}