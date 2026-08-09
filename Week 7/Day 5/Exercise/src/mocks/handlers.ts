import { http, HttpResponse } from 'msw'

export const handlers = [
    http.post('/login', async ({ request }) => {
        const body = await request.json()
        return HttpResponse.json({ message: 'Login successful', body })
    }),
    http.get('/users', () => {
        return HttpResponse.json([
            { id: 1, email: "ahmed@gmail.com" },
            { id: 2, email: "fatima@gmail.com" },
            { id: 3, email: "ali@gmail.com" },
            { id: 4, email: "zara@gmail.com" },
            { id: 5, email: "usman@gmail.com" }
        ])
    }),
    http.get('/hook-data', () => {
        return HttpResponse.json({
            id: 6,
            name: "abdullah",
            email: "abdullah@gmail.com",
        })
    })
]