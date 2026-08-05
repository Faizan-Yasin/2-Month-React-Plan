import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import Login from "./Login"
import userEvent from "@testing-library/user-event"

test("input should have text", async () => {
    render(<Login />)
    const input = screen.getByPlaceholderText("Enter Name")
    await userEvent.type(input, "Faizan")
    expect(input).toHaveValue("Faizan")
    
})