export interface Movie {
    id: number
    title: string
    poster_path: string | null
    release_date: string
    vote_average: number
}

export interface TrendingMoviesResponse {
    results: Movie[]
}

export interface MovieCardProps {
    movie: Movie
}

export interface Genre {
    id: number
    name: string
}

export interface Production_Companies {
    id: number
    name: string
}

export interface MovieDetail {
    title: string
    overview: string
    poster_path: string | null
    backdrop_path: string | null
    release_date: string
    vote_average: number
    runtime: number | null
    genres: Genre[]
    production_companies: Production_Companies[]
}

export interface MovieVideo {
    site: string
    type: string
    key: string
}

export interface MovieVideos {
    results: MovieVideo[]
}

export interface SimilarMovies {
    results: Movie[]
}

export interface Actor {
    id: number
    name: string
    profile_path: string
    character: string
}

export interface MovieCredits {
    cast: Actor[]
}

export interface CastCardProps {
    actor: Actor
}

export interface MovieGridProps {
    movies: Movie[]
}

export interface SearchResponse {
    page: number
    results: Movie[]
    total_pages: number
}

export interface FavouriteStore {
    favourites: Movie[]
    toggleFavourite: (movie: Movie) => void
    isFavourite: (id: number) => boolean
}

export interface ThemeStore {
    theme: "dark" | "light"
    toggleTheme: () => void
}

export interface NavLinksProps {
    mobile?: boolean
    closeMenu?: () => void
}