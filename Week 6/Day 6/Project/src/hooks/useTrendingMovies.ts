import { useSuspenseQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../services/movieService'

export function useTrendingMovies() {
    return useSuspenseQuery({
        queryKey: ['trending'],
        queryFn: getTrendingMovies,
        staleTime: 1000 * 60 * 5,
    })
}