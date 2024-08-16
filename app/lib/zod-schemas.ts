import { z } from "zod";

export const signInSchema = z.object({
    registration_number: z
      .string({ message: 'Registration number is required.' })
      .min(10, {message:'Please enter a valid number'})
      .max(10, {message:'Please enter a valid number'}),
    password: z
      .string({ message: 'Password is required.' })
      .min(10, { message: 'Password must be at least 10 characters' })
      .max(100, { message: 'Password is too long.'}),
  });