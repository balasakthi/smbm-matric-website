import { z } from "zod";

export const careerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Valid phone number required")
    .regex(/^[0-9+\s-]+$/, "Invalid phone number"),
  email: z.email("Invalid email").optional().or(z.literal("")),
  role: z.string().optional(),
  message: z.string().optional(),
  resume: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, "Resume file is required")
    .refine(
      (files) => files?.[0]?.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB",
    )
    .refine(
      (files) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(files?.[0]?.type),
      "Only PDF and Word documents are allowed",
    ),
  website: z.string().optional(),
});

export type CareerFormData = z.infer<typeof careerSchema>;
