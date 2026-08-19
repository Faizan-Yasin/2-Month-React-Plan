import { useSuspenseQuery } from "@tanstack/react-query"
import { getMovieCredits } from "../services/movieService"

export function useMovieCredits(id: number) {
    return useSuspenseQuery({
        queryKey: ["movie-credits", id],
        queryFn: () => getMovieCredits(id),
        staleTime: 1000 * 60 * 60,
    })
}