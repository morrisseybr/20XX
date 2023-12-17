"use client";

import { Expense } from "@/model/Expense";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { faker } from "@faker-js/faker";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";

moment.locale("pt-br");

const expenseColumnHelper = createColumnHelper<Expense>();

const columns = [
  expenseColumnHelper.accessor("description", {
    header: "Descrição",
  }),
  expenseColumnHelper.accessor("amount", {
    header: "Valor",
  }),
  expenseColumnHelper.accessor("date", {
    cell: (cell) => moment(cell.getValue()).calendar(),
    header: "Data",
  }),
];

function generateData() {
  return Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    description: faker.commerce.productName(),
    category: faker.commerce.department(),
    amount: faker.number.int({ min: 10, max: 1000 }),
    date: faker.date.recent({ days: 10 }),
  }));
}

export function ExpansesTable() {
  const [data, setData] = useState<Expense[]>([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
