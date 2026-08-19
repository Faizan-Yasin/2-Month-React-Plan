import { useSuspenseQuery } from '@tanstack/react-query'
import { getMovieDetails } from '../services/movieService'

export function useMovie(id: number) {
    return useSuspenseQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovieDetails(id),
        staleTime: 1000 * 60 * 60,
    })
}