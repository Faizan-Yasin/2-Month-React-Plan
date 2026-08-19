import tmdbClient from "../api/tmdbClient"
import type { TrendingMoviesResponse, MovieDetail, MovieVideos, MovieCredits, SimilarMovies, SearchResponse } from "../types/tmdb"

export const getTrendingMovies = async (): Promise<TrendingMoviesResponse> => {
    const response = await tmdbClient.get<TrendingMoviesResponse>("/trending/movie/week")
    return response.data
}

export const searchMovies = async (query: string, page = 1): Promise<SearchResponse> => {
    const response = await tmdbClient.get<SearchResponse>("/search/movie", {
        params: {
            query,
            page,
        }
    })
    return response.data
}

export const getMovieDetails = async (id: number): Promise<MovieDetail> => {
    const response = await tmdbClient.get<MovieDetail>(`/movie/${id}`)
    return response.data
}

export const getMovieCredits = async (id: number): Promise<MovieCredits> => {
    const response = await tmdbClient.get<MovieCredits>(`/movie/${id}/credits`)
    return response.data
}

export const getMovieVideos = async (id: number): Promise<MovieVideos> => {
    const response = await tmdbClient.get<MovieVideos>(`/movie/${id}/videos`)
    return response.data
}

export const getSimilarMovies = async (id: number): Promise<SimilarMovies> => {
    const response = await tmdbClient.get<SimilarMovies>(`/movie/${id}/similar`)
    return response.data
}