import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./Home"
import { server } from '../mocks/server'
import { HttpResponse, http } from "msw"

function renderHomePage() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            }
        }
    })

    return render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        </QueryClientProvider>
    )
}

describe("Home Page Testing", () => {

    it('should render Trending Movies heading', async () => {
        renderHomePage()
        const heading = await screen.findByRole("heading", { name: /trending movies/i })
        expect(heading).toBeInTheDocument()
    })

    it("should renders trending movies", async () => {
        renderHomePage()

        expect(await screen.findByText("Inception")).toBeInTheDocument()

        expect(screen.getByText("⭐ 8.8")).toBeInTheDocument()

        expect(screen.getByText("July 16, 2010")).toBeInTheDocument()
    })

    it("should handle undefined data gracefully using fallback (data?.results ?? [])", async () => {
        server.use(
            http.get("https://api.themoviedb.org/3/trending/movie/week", () => {
                return HttpResponse.json({})
            })
        )

        renderHomePage()

        const heading = await screen.findByRole("heading", { name: /trending movies/i })
        expect(heading).toBeInTheDocument()

        const links = screen.queryAllByRole("link")
        expect(links.length).toBe(0)
    })
    
})