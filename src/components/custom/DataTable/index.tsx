import React from "react"
import type { Table as ReactTable } from "@tanstack/react-table"
import { Table, TableFooter } from "@/components/ui/table"
import BodyDataTable from "./BodyDataTable"
import HeaderDataTable from "./HeaderDataTable"

type DataTableProps<T> = {
  table: ReactTable<T>
  removeSettingColumn?: boolean
  isLoadingData?: boolean
  textNullState?: string
  removeNullState?: boolean
  footerComponent?: React.ReactNode
  rowClassName?: string
  cellClassName?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
const DataTable = <T extends {}>({
  table,
  removeSettingColumn,
  footerComponent,
  textNullState,
  removeNullState,
  rowClassName,
  cellClassName,
  isLoadingData,
}: DataTableProps<T>) => {
  return (
    <Table>
      <HeaderDataTable table={table} removeSettingColumn={removeSettingColumn} />
      <BodyDataTable
        table={table}
        textNullState={textNullState}
        removeNullState={removeNullState}
        rowClassName={rowClassName}
        cellClassName={cellClassName}
        isLoadingData={isLoadingData}
      />
      {footerComponent && <TableFooter>{footerComponent}</TableFooter>}
    </Table>
  )
}

export default DataTable
