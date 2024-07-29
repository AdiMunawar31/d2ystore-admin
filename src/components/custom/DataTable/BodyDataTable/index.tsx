import type { Table } from "@tanstack/react-table"
import { TableBody } from "@/components/ui/table"
import LoadingDataBody from "./LoadingDataBody"
import NoResultsBody from "./NoResultsBody"
import RowBodyDataTable from "./RowBodyDataTable"

type BodyDataTableProps<T> = {
  table: Table<T>
  removeNullState?: boolean
  textNullState?: string
  rowClassName?: string
  cellClassName?: string
  isLoadingData?: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-types
const BodyDataTable = <T extends {}>({
  table,
  removeNullState,
  textNullState,
  rowClassName,
  cellClassName,
  isLoadingData,
}: BodyDataTableProps<T>) => {
  return (
    <TableBody>
      {!isLoadingData ? (
        table.getRowModel().rows?.length ? (
          table
            .getRowModel()
            .rows.map((row) => (
              <RowBodyDataTable key={row.id} data={row} className={rowClassName} cellClassName={cellClassName} />
            ))
        ) : (
          !removeNullState && <NoResultsBody table={table} textNullState={textNullState} />
        )
      ) : (
        <LoadingDataBody table={table} />
      )}
    </TableBody>
  )
}

export default BodyDataTable
