"use client"

import type { HeaderGroup, Table } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type SettingColumnDataTableProps<T> = {
  table: Table<T>
  headerGroup: HeaderGroup<T>
}

// eslint-disable-next-line @typescript-eslint/ban-types
const SettingColumnDataTable = <T extends {}>({ table, headerGroup }: SettingColumnDataTableProps<T>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="ml-auto h-fit p-0 hover:bg-transparent">
          <Settings2 />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value: boolean) => column.toggleVisibility(value)}
                disabled={column.getIsVisible() && headerGroup.headers.length == 2}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SettingColumnDataTable
