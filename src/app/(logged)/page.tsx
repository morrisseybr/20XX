import { TransactionsTable } from "@/components/transactions-table";
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
                <Link href="/income">Transações</Link>
              </h2>
              <Link href="/income/new" className="btn btn-square btn-sm">
                <Plus />
              </Link>
            </div>
            <TransactionsTable />
          </div>
        </div>
      </section>
    </main>
  );
}
