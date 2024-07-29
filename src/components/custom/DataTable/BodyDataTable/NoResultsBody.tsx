import type { Table } from "@tanstack/react-table"
import { TableCell, TableRow } from "@/components/ui/table"

type NoResultsBodyProps<T> = {
  table: Table<T>
  textNullState?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
const NoResultsBody = <T extends {}>({ table, textNullState }: NoResultsBodyProps<T>) => {
  return (
    <TableRow>
      <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
        <span className="italic text-neutral-grey-600-body-text">{textNullState ?? " No results found."}</span>
      </TableCell>
    </TableRow>
  )
}

export default NoResultsBody
