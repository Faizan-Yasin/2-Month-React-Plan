import { render, screen } from "@testing-library/react"
import LoginForm from "../components/LoginForm"
import { MemoryRouter } from 'react-router'
import userEvent from "@testing-library/user-event"

it("login button is disabled initially", () => {
    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )

    const button = screen.getByRole("button", {
        name: /login/i,
    })

    expect(button).toBeDisabled()
})

it("enables login button when user types", async () => {
    const user = userEvent.setup()

    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )

    const button = screen.getByRole("button", {
        name: /login/i,
    })

    expect(button).toBeDisabled()

    await user.type(
        screen.getByPlaceholderText("name@example.com"),
        "ali@gmail.com"
    )

    expect(button).toBeEnabled()
})

it("shows email required error", async () => {
    const user = userEvent.setup()

    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )

    await user.type(
        screen.getByPlaceholderText("••••••••"),
        "Ali@12345"
    )

    await user.click(
        screen.getByRole("button", {
            name: /login/i,
        })
    )

    expect(
        await screen.findByText("Invalid Email!")
    ).toBeInTheDocument()
})

it("shows password required error", async () => {
    const user = userEvent.setup()

    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )

    await user.type(
        screen.getByPlaceholderText("name@example.com"),
        "ali@gmail.com"
    )

    await user.click(
        screen.getByRole("button", {
            name: /login/i,
        })
    )

    expect(
        await screen.findByText("Password must be at least 8 characters!")
    ).toBeInTheDocument()
})

it("logs in successfully", async () => {
    const user = userEvent.setup()

    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )

    await user.type(
        screen.getByPlaceholderText("name@example.com"),
        "ali@gmail.com"
    )

    await user.type(
        screen.getByPlaceholderText("••••••••"),
        "Ali@12345"
    )

    await user.click(
        screen.getByRole("button", {
            name: /login/i,
        })
    )

    expect(
        screen.getByText("Logging in...")
    ).toBeInTheDocument()

    expect(
        screen.getByRole("button")
    ).toBeDisabled()

})