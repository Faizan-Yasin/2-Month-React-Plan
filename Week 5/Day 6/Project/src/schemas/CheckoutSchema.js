import { z } from 'zod'

export const CheckoutSchema = z.object({
    name: z.string().min(2, "Minimum Length Of Name Should be 2!").max(20, "Maximum Length Of Name Should be 20!"),
    email: z.string().email("Invalid Email!"),
    address: z.string().min(3, "Address is too short"),
    card: z.string().length(16, "Card number must be 16 digits"),
    expiry: z.string().min(5, "Invalid expiry"),
    cvv: z.string().length(3, "CVV must be 3 digits")
})