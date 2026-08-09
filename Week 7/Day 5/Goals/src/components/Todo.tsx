import { useEffect, useState } from "react"

interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchTodos() {
      try {
        setTodos([])
        setLoading(true)
        setError(null)
        const response = await fetch('/todos', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`HTTP Error : ${response.status}`)
        }
        const data = await response.json()
        setTodos(data)
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setLoading(false)
          setError(error)
        } else if (!(error instanceof Error)) {
          setLoading(false)
          setError(new Error("Something went wrong"))
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchTodos()

    return () => {
      controller.abort()
    }
  }, [])

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  if (error) {
    return (
      <h2>{error.message}</h2>
    )
  }

  async function handleAdd(todo: Todo) {
    const response = await fetch('/todos', {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await response.json()
    console.log(data);
  }

  async function handleUpdate(todo: Todo) {
    const response = await fetch(`/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await response.json()
    console.log(data);
  }

  return (
    <div>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <h2>Title : {todo.title}</h2>
            {todo.completed ? "Completed" : "UnCompleted"}
          </div>
        ))
      }
      <button onClick={() => handleAdd({
        id: 3,
        title: "Learn MSW",
        completed: false,
      })}>Add Todo</button>

      <button onClick={() => handleUpdate({
        id: 3,
        title: "Learn CI/CD",
        completed: false,
      })}>Update Todo</button>
    </div>
  )
}

export default Todo
