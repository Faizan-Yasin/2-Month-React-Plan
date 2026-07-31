import tmdbClient from "../api/tmdbClient"

export const getTrendingMovies = async () => {
    const response = await tmdbClient.get("/trending/movie/week")
    return response.data
}

export const searchMovies = async (query, page = 1) => {
    const response = await tmdbClient.get("/search/movie", {
        params: {
            query,
            page,
        }
    })
    return response.data
}

export const getMovieDetails = async (id) => {
    const response = await tmdbClient.get(`/movie/${id}`)
    return response.data
}

export const getMovieCredits = async (id) => {
    const response = await tmdbClient.get(`/movie/${id}/credits`)
    return response.data
}

export const getMovieVideos = async (id) => {
    const response = await tmdbClient.get(`/movie/${id}/videos`)
    return response.data
}

export const getSimilarMovies = async (id) => {
    const response = await tmdbClient.get(`/movie/${id}/similar`)
    return response.data
}