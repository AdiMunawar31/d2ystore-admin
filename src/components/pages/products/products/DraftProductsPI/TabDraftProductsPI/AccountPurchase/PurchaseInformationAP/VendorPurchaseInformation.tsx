"use client"

import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import DataTable from "@/components/custom/DataTable"
import type { VendorsPurchasingProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const columns: ColumnDef<VendorsPurchasingProductsPIInterface>[] = [
  {
    accessorKey: "vendor",
    header: "Vendor",
    cell: ({ row }) => <div className="p-4 capitalize">{row.original.name}</div>,
  },
  {
    accessorKey: "date",
    header: () => "Valid date",
    cell: ({ row }) => {
      return <span className="p-4 capitalize">{format(new Date(row.original.valid_date), "dd/MM/yyyy")}</span>
    },
  },
]

const VendorPurchaseInformation = () => {
  const { accountPurchase } = useDraftProductsPIContext()

  const table = useReactTable({
    data: accountPurchase.purchasing?.vendors || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section className="mt-2">
      <DataTable<VendorsPurchasingProductsPIInterface>
        table={table}
        textNullState="You have no data source of supply"
        removeSettingColumn
        cellClassName="p-0"
      />
    </section>
  )
}

export default VendorPurchaseInformation
