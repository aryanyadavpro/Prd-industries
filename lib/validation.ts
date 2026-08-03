import { z } from "zod";

/** Shared enquiry form validation schema — used by both client and server. */
export const enquirySchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  company: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required").max(20),
  product: z.string().max(200).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
  website: z.string().max(0, "Bot detected").optional(), // honeypot
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
