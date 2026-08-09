import { http, HttpResponse } from 'msw'

interface Form {
    name: string,
    email: string,
    password: string,
}

export const handlers = [
    http.get("/todos", () => {
        return HttpResponse.json([
            {
                id: 1,
                title: "Learn React",
                completed: false,
            },
            {
                id: 2,
                title: "Learn TypeScript",
                completed: true,
            },
        ])
    }),
    http.post("/todos", async ({ request }) => {
        const body = await request.json()
        return HttpResponse.json({
            message: "Todo Added Successfully!",
            results: [body],
        })
    }),
    http.put('/todos/:id', async ({ request, params }) => {
        const body = await request.json() as { title: string, completed: boolean }
        return HttpResponse.json({
            message: "Todo Updated Successfully!",
            id: params.id,
            title: body.title,
            completed: body.completed,
        })
    }),
    http.post('forms', async ({ request }) => {
        const body = await request.json() as Form
        return HttpResponse.json(
            {
                message: "User Created Successfully!",
                user: body,
                status: 201,
            },
        )
    })
]