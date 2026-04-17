import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Valid phone number required")
    .regex(/^[0-9+\s-]+$/, "Invalid phone number"),
  email: z.email("Invalid email").optional().or(z.literal("")),
  message: z.string().min(5, "Message is too short"),
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
