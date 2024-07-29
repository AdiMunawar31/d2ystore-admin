import { flexRender } from "@tanstack/react-table"
import type { Table } from "@tanstack/react-table"
import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import SettingColumnDataTable from "./SettingColumnDataTable"

type HeaderDataTableProps<T> = {
  table: Table<T>
  removeSettingColumn?: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-types
const HeaderDataTable = <T extends {}>({ table, removeSettingColumn }: HeaderDataTableProps<T>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header, index) => {
            return (
              <TableHead key={header.id}>
                <span className="flex items-center">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

                  {!removeSettingColumn && headerGroup.headers.length - 1 === index && (
                    <SettingColumnDataTable table={table} headerGroup={headerGroup} />
                  )}
                </span>
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}

export default HeaderDataTable
