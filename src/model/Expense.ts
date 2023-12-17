import { z } from "zod";

export const ExpenseSchema = z.object({
  id: z.string(),
  description: z.string(),
  category: z.string(),
  amount: z.number().nonnegative(),
  date: z.date(),
});

export type Expense = z.infer<typeof ExpenseSchema>;
