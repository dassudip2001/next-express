import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string({
        message: "Email must be a string",
      })
      .email({
        message: "Email must be a valid email",
      }),
    password: z
      .string({
        message: "Password must be a required ",
      })
      .min(6),
    name: z
      .string({
        message: "Name must be a string",
      })
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(255),
    confirm_password: z
      .string({
        message: "Confirm Password must be a required",
      })
      .min(6),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password and Confirm Password must be same",
    path: ["confirm_password"],
  });
