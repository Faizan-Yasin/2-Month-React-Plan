import { useQuery } from "@tanstack/react-query"
import { getMovieVideos } from "../services/movieService"

export function useMovieVideos(id) {
  return useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => getMovieVideos(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
    suspense: true,
  })
}