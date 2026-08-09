import { z } from "zod"

export const loginSchema = z.object({
    email: z.email("Invalid Email!"),
    password: z.string().min(8, "Password must be at least 8 characters!")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Must include uppercase, lowercase, number, and special character!"),
})

export type Login = z.infer<typeof loginSchema>