import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataContext } from "@/lib/data-provider";
import { ReactNode, useContext } from "react";

export default function DisplayTransformedData() {
  const {
    data: { transformed },
  } = useContext(DataContext);
  return (
    <div className="display-transformed-data">
      {/* {JSON.stringify(transformed)} */}
      {transformed !== null &&
        transformed?.data &&
        transformed.data.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                {transformed?.headers.map((header) => (
                  <TableHead key={header.label}>{header.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {(transformed?.data as Record<string, unknown>[]).map(
                (row, i) => (
                  <TableRow key={i}>
                    {transformed?.headers.map(({ label }, i) => (
                      <TableCell key={i}>{row[label] as ReactNode}</TableCell>
                    ))}
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={transformed?.headers.length}>
                  Total: {transformed?.headers.length} items
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )}
    </div>
  );
}
