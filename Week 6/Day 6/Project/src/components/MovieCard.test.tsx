import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { Movie } from "../types/tmdb"
import MovieCard from "./MovieCard"

const movie: Movie = {
    id: 1,
    title: "Inception",
    poster_path: "/poster.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
}

describe("Movie Card Testing", () => {

    it('should renders title, rating and release date', () => {
        render(<MovieCard movie={movie} />)

        expect(screen.getByText("Inception")).toBeInTheDocument()
        expect(screen.getByText("⭐ 8.8")).toBeInTheDocument()
        expect(screen.getByText("July 16, 2010")).toBeInTheDocument()
    })

    it('should adds and removes a movie from favourites', async () => {
        const user = userEvent.setup()

        render(<MovieCard movie={movie} />)

        const button = screen.getByRole("button", { name: /add to favourites/i })

        await user.click(button)

        expect(screen.getByRole("button", { name: /remove from favourites/i })).toBeInTheDocument()

        await user.click(button)

        expect(screen.getByRole("button", { name: /add to favourites/i })).toBeInTheDocument()

    })

})