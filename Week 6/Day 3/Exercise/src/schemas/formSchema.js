import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(2, "Minimum 2 Characters Required!").max(20, "Maximum 20 Characters Allowed!"),
    email: z.string().email("Invalid Email!")
})