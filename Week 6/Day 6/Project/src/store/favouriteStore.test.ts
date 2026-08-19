import { useFavouriteStore } from "./favouriteStore"
import type { Movie } from "../types/tmdb"

const Movie1: Movie = {
    id: 1,
    title: "Inception",
    poster_path: "/poster.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
}

const Movie2: Movie = {
    id: 2,
    title: "Interstellar",
    poster_path: "/poster.jpg",
    release_date: "2014-11-07",
    vote_average: 8.6,
}

describe("Favourite Store Testing", () => {

    beforeEach(() => {
        useFavouriteStore.setState({ favourites: [] })
    })

    it("should start with an empty favourites array", () => {
        const { favourites } = useFavouriteStore.getState()
        expect(favourites).toEqual([])
    })

    it("should add a movie to favourites when toggleFavourite is called on a new movie", () => {

        useFavouriteStore.getState().toggleFavourite(Movie1)

        const { favourites } = useFavouriteStore.getState()
        expect(favourites).toHaveLength(1)
        expect(favourites[0]).toEqual(Movie1)
    })

    it("should remove a movie from favourites when toggleFavourite is called again on an existing movie", () => {
        const store = useFavouriteStore.getState()

        store.toggleFavourite(Movie1)
        expect(useFavouriteStore.getState().favourites).toHaveLength(1)

        useFavouriteStore.getState().toggleFavourite(Movie1)
        expect(useFavouriteStore.getState().favourites).toHaveLength(0)
    })

    it("should accurately return true/false for isFavourite helper method", () => {
        const store = useFavouriteStore.getState()

        expect(store.isFavourite(Movie1.id)).toBe(false)

        store.toggleFavourite(Movie1)

        expect(useFavouriteStore.getState().isFavourite(Movie1.id)).toBe(true)
        expect(useFavouriteStore.getState().isFavourite(Movie2.id)).toBe(false)
    })

    it("should handle multiple movies independently", () => {
        const store = useFavouriteStore.getState()

        store.toggleFavourite(Movie1)
        useFavouriteStore.getState().toggleFavourite(Movie2)

        let favourites = useFavouriteStore.getState().favourites
        expect(favourites).toHaveLength(2)
        expect(favourites).toEqual([Movie1, Movie2])

        useFavouriteStore.getState().toggleFavourite(Movie1)

        favourites = useFavouriteStore.getState().favourites
        expect(favourites).toHaveLength(1)
        expect(favourites[0]?.id).toBe(Movie2.id)
    })
    
})