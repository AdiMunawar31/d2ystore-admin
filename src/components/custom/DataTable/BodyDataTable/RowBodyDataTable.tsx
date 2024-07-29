"use client"

import { flexRender } from "@tanstack/react-table"
import type { Row } from "@tanstack/react-table"
import { TableRow } from "@/components/ui/table"
import { TableCell } from "@/components/ui/table"

type RowBodyDataTableProps<T> = {
  data: Row<T>
  className?: string
  cellClassName?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
const RowBodyDataTable = <T extends {}>({ data, className, cellClassName }: RowBodyDataTableProps<T>) => {
  return (
    <TableRow data-state={data.getIsSelected() && "selected"} className={className}>
      {data.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} className={cellClassName}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default RowBodyDataTable
