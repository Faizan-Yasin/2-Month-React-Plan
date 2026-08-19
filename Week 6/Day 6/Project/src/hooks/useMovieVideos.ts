import { useSuspenseQuery } from "@tanstack/react-query"
import { getMovieVideos } from "../services/movieService"

export function useMovieVideos(id: number) {
  return useSuspenseQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => getMovieVideos(id),
    staleTime: 1000 * 60 * 60,
  })
}