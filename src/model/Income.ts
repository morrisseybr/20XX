import { z } from "zod";

export const IncomeSchema = z.object({
  id: z.string(),
  amount: z.number(),
  source: z.string(),
  date: z.date(),
});

export type Income = z.infer<typeof IncomeSchema>;
