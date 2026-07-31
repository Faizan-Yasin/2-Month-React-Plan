import { useQuery } from '@tanstack/react-query'
import { getMovieDetails } from '../services/movieService'

export function useMovie(id) {
    return useQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovieDetails(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 60,
        suspense: true,
    })
}