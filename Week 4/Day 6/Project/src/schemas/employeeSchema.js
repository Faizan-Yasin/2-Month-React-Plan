import { z } from 'zod'

export const employeeSchema = z.object({
    name: z.string().min(2, "Minimum Length Of Name Should be 2!").max(20, "Maximum Length Of Name Should be 20!"),
    email: z.string().email("Invalid Email!"),
    department: z.string().min(2, "Minimum Length Of Department Should be 2!").max(20, "Maximum Length Of Department Should be 20!"),
    status: z.enum(["Active", "Pending", "Inactive"], "Status is Required")
})