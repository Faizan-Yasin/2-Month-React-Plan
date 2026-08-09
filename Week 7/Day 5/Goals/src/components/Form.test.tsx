import { render, screen } from "@testing-library/react"
import RegisterForm from "./RegisterForm"
import { userEvent } from '@testing-library/user-event'

it("name, email and password should be in the document", () => {
    render(<RegisterForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument()
})

it('user should type', async () => {
    render(<RegisterForm />)
    await userEvent.type(screen.getByPlaceholderText("Enter Your Name"), "Faizan")
    await userEvent.type(screen.getByPlaceholderText("Enter Your Email"), "faizan@gmail.com")
    await userEvent.type(screen.getByPlaceholderText("Enter Your Password"), "12345")
    expect(screen.getByPlaceholderText("Enter Your Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter Your Email")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter Your Password")).toBeInTheDocument()
})

it('submit button should clicked', async () => {
    render(<RegisterForm />)
    await userEvent.click(screen.getByRole("button", { name: /submit/i }))
})

