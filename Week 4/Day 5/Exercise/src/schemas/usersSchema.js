import { z } from 'zod'

export const usersSchema = z.array(
    z.object({
        id: z.number(),
        name: z.string(),
        username: z.string(),
        email: z.string().email(),
    })
)