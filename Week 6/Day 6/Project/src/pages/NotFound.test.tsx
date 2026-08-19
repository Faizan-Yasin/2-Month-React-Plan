import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import NotFound from "./NotFound"

describe("Not Found Page Testing", () => {
    it("should renders 404 page content", () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        )

        expect(screen.getByText("404")).toBeInTheDocument()
        expect(screen.getByText("Page Not Found")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Go Home" })).toBeInTheDocument()
    })

    it("should Go Home link points to home page", () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        )

        expect(screen.getByRole("link", { name: "Go Home" })).toHaveAttribute("href", "/")
    }) 
})