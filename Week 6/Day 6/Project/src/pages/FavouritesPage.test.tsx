import { render, screen, act } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import FavouritesPage from "./FavouritesPage"
import { useFavouriteStore } from "../store/favouriteStore"
import type { Movie } from "../types/tmdb"

const favouriteMovies: Movie[] = [
    {
        id: 1,
        title: "Inception",
        poster_path: "/poster1.jpg",
        release_date: "2010-07-16",
        vote_average: 8.8,
    },
    {
        id: 2,
        title: "Interstellar",
        poster_path: "/poster2.jpg",
        release_date: "2014-11-07",
        vote_average: 8.7,
    },
]

describe("Favourites Page Testing", () => {

    beforeEach(() => {
        localStorage.clear()
        act(() => {
            useFavouriteStore.setState({ favourites: [] })
        })
    })
    
    it("should shows pre-populated favourite movies", () => {

        useFavouriteStore.setState({
            favourites: favouriteMovies,
        })

        render(
            <MemoryRouter>
                <FavouritesPage />
            </MemoryRouter>
        )

        expect(screen.getByText("Inception")).toBeInTheDocument()
        expect(screen.getByText("Interstellar")).toBeInTheDocument()
    })

    it('should render No favourite movies yet', () => {
        useFavouriteStore.setState({
            favourites: []
        })
        render(
            <MemoryRouter>
                <FavouritesPage />
            </MemoryRouter>
        )

        expect(screen.getByText("No favourite movies yet")).toBeInTheDocument()

    })
})
