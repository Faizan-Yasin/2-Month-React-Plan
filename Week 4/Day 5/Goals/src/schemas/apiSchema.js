import { email, z } from 'zod'

export const apiSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
})