import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import TodoItem from "./TodoItem"

const todo = {
    id: "1",
    title: "Vitest",
    description: "Vitest complete Sikhna hai kal tk",
    completed: false,
    createdAt: "3:52pm"
}

const theme = false

const toggleTodo = vi.fn()
const handleUpdate = vi.fn()
const handleDelete = vi.fn()

it('render Todo Title', () => {
    render(
        <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const title = screen.getByRole("heading", {
        name: /task title : vitest/i
    })
    expect(title).toBeInTheDocument()
})

it('render Todo Description', () => {
    render(
        <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const description = screen.getByRole("heading", {
        name: /task description : Vitest complete Sikhna hai kal tk/i
    })
    expect(description).toBeInTheDocument()
})

it('render Todo Created At', () => {
    render(
        <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const createdAt = screen.getByRole("heading", {
        name: /created at : 3:52pm/i
    })
    expect(createdAt).toBeInTheDocument()
})

it('render checked checkbox when todo is completed', () => {
    const completedTodo = {
        ...todo,
        completed: true
    }
    render(
        <TodoItem
            todo={completedTodo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeChecked()
})

it('render toggleTodo with correct id on checkbox click', async () => {

    render(
        <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const checkbox = screen.getByRole("checkbox")
    await userEvent.click(checkbox)
    expect(toggleTodo).toHaveBeenCalledWith(todo.id)
    expect(toggleTodo).toHaveBeenCalledTimes(1)
})

it('render handleDelete with correct id on delete button click', async () => {

    render(
        <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const deleteBtn = screen.getByRole("button", {name: /delete/i})
    await userEvent.click(deleteBtn)
    expect(handleDelete).toHaveBeenCalledWith(todo.id)
    expect(handleDelete).toHaveBeenCalledTimes(1)
})

it('render handleUpdate with correct id on edit button click', async () => {

    render(
        <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            theme={theme}
        />
    )
    const EditBtn = screen.getByRole("button", {name: /edit/i})
    await userEvent.click(EditBtn)
    expect(handleUpdate).toHaveBeenCalledWith(todo)
    expect(handleUpdate).toHaveBeenCalledTimes(1)
})