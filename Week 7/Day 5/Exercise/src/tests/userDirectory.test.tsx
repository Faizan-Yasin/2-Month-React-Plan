import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { describe, it, expect } from "vitest"
import { http, HttpResponse } from "msw"
import userEvent from "@testing-library/user-event"
import UserDirectory from "../components/UserDirectory"
import { server } from "../mocks/server"

function renderUserDirectory() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60,
                gcTime: 1000 * 60 * 5,
                retry: false,
            },
        },
    })

    render(
        <QueryClientProvider client={queryClient}>
            <UserDirectory />
        </QueryClientProvider>
    )
}

describe("UserDirectory", () => {

    it("renders skeleton while loading", () => {
        renderUserDirectory()

        const skeletons = screen.getAllByRole("generic")

        expect(skeletons.length).toBeGreaterThan(0)
    })


    it("renders 5 users after fetching", async () => {
        renderUserDirectory()

        const users = await screen.findAllByRole("article")

        expect(users).toHaveLength(5)

        expect(screen.getByText("ahmed@gmail.com")).toBeInTheDocument()

        expect(screen.getByText("fatima@gmail.com")).toBeInTheDocument()

        expect(screen.getByText("ali@gmail.com")).toBeInTheDocument()

        expect(screen.getByText("zara@gmail.com")).toBeInTheDocument()

        expect(screen.getByText("usman@gmail.com")).toBeInTheDocument()
    })


    it("renders error and Refetch button", async () => {

        server.use(
            http.get("/users", () => {
                return HttpResponse.error()
            })
        )

        renderUserDirectory()

        expect(
            await screen.findByRole("button", {
                name: "Refetch",
            })
        ).toBeInTheDocument()
    })


    it("refetches users successfully", async () => {

        server.use(
            http.get("/users", () => {
                return HttpResponse.error()
            })
        )

        renderUserDirectory()

        const refetchButton =
            await screen.findByRole("button", {
                name: "Refetch",
            })


        server.use(
            http.get("/users", () => {
                return HttpResponse.json([
                    {
                        id: 1,
                        email: "ahmed@gmail.com",
                    },
                    {
                        id: 2,
                        email: "fatima@gmail.com",
                    },
                    {
                        id: 3,
                        email: "ali@gmail.com",
                    },
                    {
                        id: 4,
                        email: "zara@gmail.com",
                    },
                    {
                        id: 5,
                        email: "usman@gmail.com",
                    },
                ])
            })
        )

        const user = userEvent.setup()

        await user.click(refetchButton)

        const users =
            await screen.findAllByRole("article")

        expect(users).toHaveLength(5)
    })
})