import { useSuspenseQuery } from "@tanstack/react-query"
import { getSimilarMovies } from "../services/movieService"

export function useSimilarMovies(id: number) {
    return useSuspenseQuery({
        queryKey: ["similar-movies", id],
        queryFn: () => getSimilarMovies(id),
        staleTime: 1000 * 60 * 30,
    })
}