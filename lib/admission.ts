import { z } from "zod";

export const admissionSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  parentName: z.string().min(2, "Parent name is required"),
  email: z.email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(10, "Phone must be 10 digits"),
  grade: z.string().min(1, "Select a grade"),
  message: z.string().optional(),
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;
