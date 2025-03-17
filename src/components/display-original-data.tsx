import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataContext } from "@/lib/data-provider";
import { ReactNode, useContext } from "react";

export default function DisplayOriginalData() {
  const {
    data: { original },
  } = useContext(DataContext);
  return (
    <div className="display-original-data">
      {/* {JSON.stringify(original)} */}
      {original !== null && original?.data && original.data.length > 0 && (
        <Table>
          <TableCaption>Uploaded data.</TableCaption>
          <TableHeader>
            <TableRow>
              {original?.headers.map((header) => (
                <TableHead key={header.label}>{header.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {(original?.data as Record<string, unknown>[]).map((row, i) => (
              <TableRow key={i}>
                {original?.headers.map(({ label }, i) => (
                  <TableCell key={i}>{row[label] as ReactNode}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={original?.headers.length}>
                Total: {original?.headers.length} items
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
}
