import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(2, "Minimum Length Of Name Should be 2!").max(20, "Maximum Length Of Name Should be 20!"),
    email: z.string().email("Invalid email address!"),
    phone: z.string().optional(),
    password: z.string().min(8, "Minimum Length Of Password Should be 8!")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Must include uppercase, lowercase, number, and special character!"),
    confirmPassword: z.string(),
}).refine((data) =>
    data.password === data.confirmPassword, {
    message: "Password is not match with Confirm Password!",
    path: ["confirmPassword"],
}
)