"use client";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { clsx } from "clsx";
import { useState } from "react";

interface UserData {
  userId: string;
  username: string;
  votes: number;
  leftVotes: number;
  rightVotes: number;
  nominations: number;
  edits: number;
}

const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "username",
    header: "User",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "votes",
    header: "Votes",
    cell: (info) => info.getValue(),
  },
  {
    id: "leftRight",
    header: "L:R",
    accessorFn: (row) => `${row.leftVotes}:${row.rightVotes}`,
    sortingFn: (rowA, rowB) => {
      const ratioA =
        rowA.original.leftVotes /
        (rowA.original.leftVotes + rowA.original.rightVotes);
      const ratioB =
        rowB.original.leftVotes /
        (rowB.original.leftVotes + rowB.original.rightVotes);
      return ratioA - ratioB;
    },
  },
  {
    accessorKey: "nominations",
    header: "Nominations",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "edits",
    header: "Edits",
    cell: (info) => info.getValue(),
  },
];

export default function UsersTable({ data }: { data: UserData[] }) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "votes", desc: true },
  ]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-x-scroll text-sm">
      <table className="table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                // eslint-disable-next-line click-events-have-key-events
                <th
                  key={header.id}
                  className="cursor-pointer select-none p-4 hover:bg-muted-3"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div
                    className={clsx(
                      "flex items-center gap-1",
                      header.column.id === "username"
                        ? "justify-start"
                        : "justify-end",
                    )}
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                    <div>
                      {{
                        asc: " ↑",
                        desc: " ↓",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={clsx(
                    "p-2",
                    cell.column.id === "username" ? "text-left" : "text-right",
                  )}
                >
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
