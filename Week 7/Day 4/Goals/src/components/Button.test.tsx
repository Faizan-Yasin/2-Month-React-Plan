import Button from "./Button"
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test("render button", () => {
    render(<Button />)
    // const button = screen.getByText("Login")
    // const button = screen.getByRole("button")
    const button = screen.getByRole("button", {
        name: "Login",
    })
    expect(button).toBeTruthy
})

test("Logout should not exist", () => {
    render(<Button />)
    const button = screen.queryByText("Logout")
    expect(button).toBeNull()
})

test("Batman should exist", async () => {
    render(<Button />)
    const movie = await screen.findByText("Batman")
    expect(movie).toBeTruthy()
})