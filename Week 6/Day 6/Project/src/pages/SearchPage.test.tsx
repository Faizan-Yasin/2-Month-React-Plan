import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen } from "@testing-library/react"
import SearchPage from "../pages/SearchPage"
import { server } from "../mocks/server"
import { delay, http, HttpResponse } from "msw"
import { MemoryRouter } from "react-router"
import { userEvent } from '@testing-library/user-event'

function renderSearchPage() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            }
        }
    })

    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={["/search?query=batman"]}>
                <SearchPage />
            </MemoryRouter>
        </QueryClientProvider>
    )
}

describe("Search Page Testing", () => {

    it('should render Search Movies heading and input field', () => {
        renderSearchPage()

        expect(screen.getByRole("heading", { name: /Search Movies/i })).toBeInTheDocument()
        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.getByRole("textbox")).toHaveValue("batman")
    })

    it("should update input value and display 'Typing...' state when user types", async () => {
        const user = userEvent.setup()
        renderSearchPage()

        const input = screen.getByRole("textbox")

        await user.clear(input)
        await user.type(input, "Avatar")

        expect(input).toHaveValue("Avatar")
        expect(screen.getByText("Typing...")).toBeInTheDocument()
    })

    it('should renders movie skeletons while search results are loading', () => {
        server.use(
            http.get("https://api.themoviedb.org/3/search/movie", async () => {
                await delay(1000)
                return HttpResponse.json({
                    page: 1,
                    results: [],
                    total_pages: 1,
                })
            })
        )

        renderSearchPage()

        const skeletons = screen.getAllByTestId("movie-card-skeleton")

        expect(skeletons).toHaveLength(10)
    })

    it("should renders movies after search results load", async () => {
        server.use(
            http.get(
                "https://api.themoviedb.org/3/search/movie",
                () => {
                    return HttpResponse.json({
                        page: 1,
                        results: [
                            {
                                id: 1,
                                title: "Inception",
                                poster_path: "/poster.jpg",
                                vote_average: 8.8,
                                release_date: "2010-07-16",
                            },
                            {
                                id: 2,
                                title: "Interstellar",
                                poster_path: "/poster.jpg",
                                vote_average: 8.7,
                                release_date: "2014-11-07",
                            },
                            {
                                id: 3,
                                title: "Batman",
                                poster_path: "/poster.jpg",
                                vote_average: 8.2,
                                release_date: "2008-07-18",
                            },
                        ],
                        total_pages: 1,
                    })
                }
            )
        )

        renderSearchPage()

        expect(await screen.findByText("Inception")).toBeInTheDocument()
        expect(await screen.findByText("Interstellar")).toBeInTheDocument()
        expect(await screen.findByText("Batman")).toBeInTheDocument()
        expect(await screen.findByText("No more movies.")).toBeInTheDocument()
    })

    it("should shows No Movies Found when search returns an empty result", async () => {
        server.use(
            http.get(
                "https://api.themoviedb.org/3/search/movie",
                () => {
                    return HttpResponse.json({
                        page: 1,
                        results: [],
                        total_pages: 1,
                    })
                }
            )
        )

        renderSearchPage()

        expect(await screen.findByRole("heading", {
            name: "No Movies Found",
            level: 3,
        })).toBeInTheDocument()

        expect(screen.getByText("Try another movie title.")).toBeInTheDocument()
    })
})