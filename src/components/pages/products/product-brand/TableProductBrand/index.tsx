"use client"

import { useEffect, useState } from "react"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"
import { ChevronsUpDown } from "lucide-react"
import DataTable from "@/components/custom/DataTable"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import type { ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"
import { useProductBrandContext } from "@/providers/products/product-brand/ProductBrandProvider"
import ActionProductBrand from "./ActionProductBrand"

const TableProductBrand = () => {
  const { sort, setSort, selectedProductBrand, setSelectedProductBrand, listProductBrand, isLoadingListProductBrand } =
    useProductBrandContext()

  const columns: ColumnDef<ProductBrandInterface>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "Product Brand ID",
      header: "Product Brand ID",
      cell: ({ row }) => {
        return <span className="font-medium">{row.original.code || "-"}</span>
      },
    },
    {
      accessorKey: "Product Brand Name",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => setSort(sort === "ASC" ? "DESC" : "ASC")}
          >
            Product Brand Name
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        return <span className="capitalize">{row.original.name}</span>
      },
    },
    {
      accessorKey: "parent",
      header: () => "Parent",
      cell: ({ row }) => {
        return <span className="capitalize">{row?.original?.parent?.name || "-"}</span>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      header: "Actions",
      cell: (props) => {
        return <ActionProductBrand {...props} />
      },
    },
  ]

  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: listProductBrand,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  })

  useEffect(() => {
    const selectedRows = table.getFilteredSelectedRowModel().rows.map((row) => row.original)
    setSelectedProductBrand(selectedRows)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection])

  useEffect(() => {
    if (selectedProductBrand.length !== Object.keys(rowSelection).length) {
      const updatedRowSelection = selectedProductBrand.reduce((acc, item) => {
        const indexItem = listProductBrand.findIndex((i) => i.id === item.id)
        return { ...acc, [indexItem]: true }
      }, {})

      setRowSelection(updatedRowSelection)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProductBrand])

  return (
    <section className="p-4">
      <DataTable<ProductBrandInterface> table={table} isLoadingData={isLoadingListProductBrand} />
    </section>
  )
}

export default TableProductBrand
