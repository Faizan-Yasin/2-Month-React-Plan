import userEvent from "@testing-library/user-event"
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Counter from "./Counter"

test("increment count", async () => {
    render(<Counter />)
    const button = screen.getByRole("button", {
        name: "Increment"
    })
    await userEvent.click(button)
    expect(screen.getByText("1")).toBeTruthy()
})