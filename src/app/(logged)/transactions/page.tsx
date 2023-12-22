import { TransactionsTable } from "@/components/transactions-table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function TransactionsPage() {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <div className="flex items-center justify-between px-4">
          <h2 className="card-title">Transações</h2>
          <Link href="/income/new" className="btn btn-square btn-sm">
            <Plus />
          </Link>
        </div>
        <TransactionsTable />
      </section>
    </main>
  );
}
