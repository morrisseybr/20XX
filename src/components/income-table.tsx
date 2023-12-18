"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { faker } from "@faker-js/faker";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import { Income } from "@/model/Income";
import currency from "currency.js";

moment.locale("pt-br");

const incomeColumnHelper = createColumnHelper<Income>();

const columns = [
  incomeColumnHelper.accessor("source", {
    header: "Fonte",
  }),
  incomeColumnHelper.accessor("amount", {
    header: "Valor",
    cell: (cell) =>
      currency(cell.getValue(), {
        symbol: "R$",
        separator: ".",
        decimal: ",",
      }).format(),
  }),
  incomeColumnHelper.accessor("date", {
    header: "Data",
    cell: (cell) => moment(cell.getValue()).calendar(),
  }),
];

function generateData() {
  return Array.from({ length: 2 }, () => ({
    id: faker.string.uuid(),
    source: faker.commerce.productName(),
    amount: faker.number.int({ min: 10, max: 1000 }),
    date: faker.date.recent({ days: 10 }),
  }));
}

export function IncomeTable() {
  const [data, setData] = useState<Income[]>([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: [{ id: "date", desc: true }],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
