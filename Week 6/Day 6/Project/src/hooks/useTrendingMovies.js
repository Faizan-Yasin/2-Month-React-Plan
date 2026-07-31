import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../services/movieService'

export function useTrendingMovies() {
    return useQuery({
        queryKey: ["trending"],
        queryFn: getTrendingMovies,
        staleTime: 1000 * 60 * 5,
        suspense: true,
    })
}