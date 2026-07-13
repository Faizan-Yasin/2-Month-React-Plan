import { z } from 'zod'

export const registerSchema = z.object({
    firstName: z.string().min(2, "Minimum Length Of First Name Should be 2!").max(20, "Maximum Length Of First Name Should be 20!"),
    lastName: z.string().min(2, "Minimum Length Of Last Name Should be 2!").max(20, "Maximum Length Of Last Name Should be 20!"),
    email: z.string().email("Invalid Email!"),
    password: z.string().min(8, "Password must be at least 8 characters!")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Must include uppercase, lowercase, number, and special character!"),
    confirmPassword: z.string(),
    role: z.enum(["Admin", "Viewer"], "Role is Required"),
    bio: z.string().max(200, "Maximum Length Of Bio Should be 200!").optional(),
    newsletter: z.boolean().default(false)
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Password is not match with Confirm Password!",
            path: ["confirmPassword"]
        })
    }
})