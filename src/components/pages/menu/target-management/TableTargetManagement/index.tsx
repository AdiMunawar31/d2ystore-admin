"use client"

import { useState } from "react"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import DataTable from "@/components/custom/DataTable"
import type { TargetManagementTableInterface } from "@/lib/interfaces/menu/target-management/target-management"
import { useTargetManagementContext } from "@/providers/menu/target-management/TargetManagementProvider"
import { COLUMNS } from "./_models/columns"

const TableTargetManagement = () => {
  const { listTargetManagement } = useTargetManagementContext()
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: listTargetManagement,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  })

  return (
    <section className="p-4">
      <DataTable<TargetManagementTableInterface> table={table} isLoadingData={false} />
    </section>
  )
}

export default TableTargetManagement
