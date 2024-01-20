import { z } from "zod";

export const sendSchema = z.object({
  flowRate: z
  .string()
  .min(1,{message:"FlowRate should not be empty"})
  .refine((val) => !isNaN(val as unknown as number), {
    message: "FlowRate hould be a number",
  }),
  walletAddress: z
    .string()
    .min(42, { message: "Your Wallet address should not be that short!" })
    .max(42),
    duration: z
    .string()
    .min(1, { message: "Duration should not be empty" })
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Duration should be a number",
    }),
  token: z.string().min(2).max(10),
  confirmation: z.string().min(1, { message: "Confirmation should not be empty" }),
});