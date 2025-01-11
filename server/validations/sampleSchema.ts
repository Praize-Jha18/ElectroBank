import { z } from 'zod';

const userSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(128, { message: "Password must be less than 128 characters long" }),
    firstName: z.string()
        .min(1, { message: "First name is required" })
        .max(100, { message: "First name must be less than 100 characters" }),
    lastName: z.string()
        .min(1, { message: "Last name is required" })
        .max(100, { message: "Last name must be less than 100 characters" }),
    // phoneNumber: z.string()
    //     // .regex(/^\+?[1-9]\d{0,3}\s?\d{7,14}$/, { message: "Invalid phone number format" })
    //     .max(16, { message: "Phone number has exceeded the limit" })
    //     .min(12, { message: "Phone number is invalid" }),
    customer_id: z.string().min(1, { message: "Customer ID is required" }),
    role: z.enum(['admin', 'user', 'guest'], { message: "Role must be either 'admin', 'user', or 'guest'" })
}).required();
export default userSchema;
