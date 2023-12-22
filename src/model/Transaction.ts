import { z } from "zod";

export const TransactionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  description: z.string(),
  category: z.string(),
  amount: z.number().nonnegative(),
  date: z.date(),
  isIncome: z.boolean(),
});

export type Transaction = z.infer<typeof TransactionSchema>;
