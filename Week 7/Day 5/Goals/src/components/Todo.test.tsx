import Todo from "./Todo"
import { render, screen } from '@testing-library/react'

it('show loading', () => {
    render(<Todo />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
})

it('show fetch Todos', async () => {
    render(<Todo />)
    expect(await screen.findByRole("heading", {name: /title : learn react/i})).toBeInTheDocument()
    expect(await screen.findByRole("heading", {name: /title : learn typescript/i})).toBeInTheDocument()
})

