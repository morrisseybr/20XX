import { ExpansesTable } from "@/components/expenses-table";
import { IncomeTable } from "@/components/income-table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mb-4 flex items-center justify-between p-4">
        <h1>20XX</h1>
        <div className="avatar placeholder">
          <div className="w-8 rounded-full bg-neutral text-neutral-content">
            <span className="text-xs">UI</span>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        <section>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title">Receitas</h2>
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
                <h2 className="card-title">Despesas</h2>
                <Link href="/income/new" className="btn btn-square btn-sm">
                  <Plus />
                </Link>
              </div>
              <ExpansesTable />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
