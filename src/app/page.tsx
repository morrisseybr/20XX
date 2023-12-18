import { ExpansesTable } from "@/components/expenses-table";
import { IncomeTable } from "@/components/income-table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h2 className="card-title">
                <Link href="/income">Receitas</Link>
              </h2>
              <Link href="/income/new" className="btn btn-square btn-sm">
                <Plus />
              </Link>
            </div>
            <IncomeTable />
          </div>
        </div>
      </section>
      <section>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h2 className="card-title">
                <Link href="/expenses">Despesas</Link>
              </h2>
              <Link href="/expenses/new" className="btn btn-square btn-sm">
                <Plus />
              </Link>
            </div>
            <ExpansesTable />
          </div>
        </div>
      </section>
    </main>
  );
}
