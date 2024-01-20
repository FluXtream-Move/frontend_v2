import { z } from "zod";

export const receiveSchema = z.object({
  flowRate: z
  .string()
  .min(1,{message:"FlowRate should not be empty"})
  .refine((val) => !isNaN(val as unknown as number), {
    message: "FlowRate hould be a number",
  }),
    duration: z
    .string()
    .min(1, { message: "Duration should not be empty" })
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Duration should be a number",
    }),
  token: z.string().min(2).max(10),
});