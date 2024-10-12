import { z } from "zod";

export const resetPasswordSchema = z.object({
  oldPassword: z
    .string()
    .min(8, { message: "Password minimun 8 char" })
    .max(20, { message: "Password miximum 20 char" }),
  newPassword: z
    .string()
    .min(8, { message: "Password minimun 8 char" })
    .max(20, { message: "Password miximum 20 char" }),
});

export type TResetPasswordT = z.infer<typeof resetPasswordSchema>;

export const updateProfileSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z
    .string()
    .refine((val) => !isNaN(Number(val)), { message: "Invalid number" })
    .transform((val) => Number(val))
    .pipe(z.number()),
});

export type UpdateProfileT = z.infer<typeof updateProfileSchema>;
