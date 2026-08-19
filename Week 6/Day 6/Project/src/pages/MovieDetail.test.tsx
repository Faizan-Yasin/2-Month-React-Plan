import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MemoryRouter, Routes, Route } from "react-router"
import { http, HttpResponse } from "msw"

import MovieDetail from "./MovieDetail"
import { server } from "../mocks/server"

function renderMovieDetail() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    })

    return render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={["/movie/1"]}>
                <Routes>
                    <Route
                        path="/movie/:id"
                        element={<MovieDetail />}
                    />
                </Routes>
            </MemoryRouter>
        </QueryClientProvider>
    )
}

describe("Movie Detail Testing", () => {
    it("should renders movie details from mocked API responses", async () => {

        server.use(

            http.get(
                "https://api.themoviedb.org/3/movie/1",
                () => {
                    return HttpResponse.json({
                        id: 1,
                        title: "Inception",
                        backdrop_path: "/backdrop.jpg",
                        poster_path: "/poster.jpg",
                        overview: "A thief enters dreams.",
                        release_date: "2010-07-16",
                        runtime: 148,
                        vote_average: 8.8,
                        genres: [
                            {
                                id: 28,
                                name: "Action",
                            },
                            {
                                id: 878,
                                name: "Science Fiction",
                            },
                        ],
                        production_companies: [
                            {
                                id: 1,
                                name: "Warner Bros.",
                            },
                        ],
                    })
                }
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/videos",
                () => {
                    return HttpResponse.json({
                        results: [],
                    })
                }
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/credits",
                () => {
                    return HttpResponse.json({
                        cast: [
                            {
                                id: 10,
                                name: "Leonardo DiCaprio",
                                character: "Cobb",
                                profile_path: "/leo.jpg",
                            },
                        ],
                    })
                }
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/similar",
                () => {
                    return HttpResponse.json({
                        page: 1,
                        results: [],
                        total_pages: 1,
                        total_results: 0,
                    })
                }
            )
        )

        renderMovieDetail()

        expect(await screen.findByRole("heading", {
            name: "Inception",
            level: 1,
        })).toBeInTheDocument()

        expect(screen.getByText("⭐ 8.8")).toBeInTheDocument()

        expect(screen.getByText("July 16, 2010")).toBeInTheDocument()

        expect(screen.getByText("2h 28m")).toBeInTheDocument()

        expect(screen.getByText("A thief enters dreams.")).toBeInTheDocument()

        expect(screen.getByText("Action")).toBeInTheDocument()

        expect(screen.getByText("Science Fiction")).toBeInTheDocument()

        expect(screen.getByText("Warner Bros.")).toBeInTheDocument()

        expect(screen.getByText("Leonardo DiCaprio")).toBeInTheDocument()
    })

    it("should renders Watch Trailer when YouTube trailer exists", async () => {
        server.use(
            http.get(
                "https://api.themoviedb.org/3/movie/1",
                () =>
                    HttpResponse.json({
                        id: 1,
                        title: "Inception",
                        backdrop_path: "/backdrop.jpg",
                        poster_path: "/poster.jpg",
                        overview: "A thief enters dreams.",
                        release_date: "2010-07-16",
                        runtime: 148,
                        vote_average: 8.8,
                        genres: [],
                        production_companies: [],
                    })
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/videos",
                () =>
                    HttpResponse.json({
                        results: [
                            {
                                id: "video-1",
                                key: "abc123",
                                site: "YouTube",
                                type: "Trailer",
                            },
                        ],
                    })
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/credits",
                () =>
                    HttpResponse.json({
                        cast: [],
                    })
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/similar",
                () =>
                    HttpResponse.json({
                        page: 1,
                        results: [],
                        total_pages: 1,
                        total_results: 0,
                    })
            )
        )

        renderMovieDetail()

        const trailerLink = await screen.findByRole("link", {
            name: /Watch Trailer/i,
        })

        expect(trailerLink).toBeInTheDocument()
        expect(trailerLink).toHaveAttribute(
            "href",
            "https://www.youtube.com/watch?v=abc123"
        )
    })

    it("should renders similar movies when API returns results", async () => {
        server.use(
            http.get(
                "https://api.themoviedb.org/3/movie/1",
                () =>
                    HttpResponse.json({
                        id: 1,
                        title: "Inception",
                        backdrop_path: "/backdrop.jpg",
                        poster_path: "/poster.jpg",
                        overview: "A thief enters dreams.",
                        release_date: "2010-07-16",
                        runtime: 148,
                        vote_average: 8.8,
                        genres: [],
                        production_companies: [],
                    })
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/videos",
                () =>
                    HttpResponse.json({
                        results: [],
                    })
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/credits",
                () =>
                    HttpResponse.json({
                        cast: [],
                    })
            ),

            http.get(
                "https://api.themoviedb.org/3/movie/1/similar",
                () =>
                    HttpResponse.json({
                        page: 1,
                        results: [
                            {
                                id: 2,
                                title: "Interstellar",
                                poster_path: "/poster2.jpg",
                                release_date: "2014-11-07",
                                vote_average: 8.6,
                            },
                        ],
                        total_pages: 1,
                        total_results: 1,
                    })
            )
        )

        renderMovieDetail()

        expect(
            await screen.findByRole("heading", {
                name: "Similar Movies",
            })).toBeInTheDocument()

        expect(screen.getByText("Interstellar")).toBeInTheDocument()
    })
})