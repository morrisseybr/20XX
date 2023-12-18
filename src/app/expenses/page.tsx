import { ExpansesTable } from "@/components/expenses-table";
import { IncomeTable } from "@/components/income-table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ExpensesPage() {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <div className="flex items-center justify-between px-4">
          <h2 className="card-title">Despesas</h2>
          <Link href="/income/new" className="btn btn-square btn-sm">
            <Plus />
          </Link>
        </div>
        <ExpansesTable />
      </section>
    </main>
  );
}
