import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataContext } from "@/lib/data-provider";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useEffect, useMemo, useState } from "react";

type UnknownRecord = Record<string, unknown>;

export default function TransformedDataTable() {
  const {
    data: { transformed, original },
  } = useContext(DataContext);
  const [localOriginal, setLocal] = useState(original);
  const columns = useMemo<ColumnDef<UnknownRecord, unknown>[]>(() => {
    if (
      !localOriginal?.data ||
      localOriginal?.data.length === 0 ||
      !localOriginal?.headers ||
      localOriginal.headers.length === 0
    )
      return [];

    return localOriginal?.headers.map((item) => ({
      accessorKey: item.label,
      header: item.label.toUpperCase(),
      cell: (info) => String(info.getValue() ?? "N/A"),
      size: 50,
    }));
  }, [localOriginal]);

  const table = useReactTable<UnknownRecord>({
    data: (localOriginal?.data as UnknownRecord[]) || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    setLocal(original);
  }, [original]);

  console.log(transformed);

  return (
    <div className="transformed-data-table">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </div>
  );
}
