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
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { cn } from "@/lib/utils"
import { formatCurrency } from "@/lib/utils/formatters"
import { useProductsPIContext } from "@/providers/products/products/ProductsPIProvider"
import ActionProductsPI from "./ActionProductsPI"
import StarProductsPI from "./StarProductsPI"

const TableProductsPI = () => {
  const { sort, setSort, listProducts, isLoadingListProducts, selectedProducts, setSelectedProducts, layout } =
    useProductsPIContext()

  const columns: ColumnDef<ProductsPIInterface>[] = [
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
      id: "star",
      header: () => <></>,
      cell: (props) => <StarProductsPI {...props} />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "product ID",
      header: "Product ID",
      cell: ({ row }) => {
        return <span className="font-medium">{row.original.code}</span>
      },
    },
    {
      accessorKey: "product name",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => setSort(sort === "ASC" ? "DESC" : "ASC")}
          >
            Product Name
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        return <span className="capitalize">{row.original.name}</span>
      },
    },
    {
      accessorKey: "cost",
      header: () => "Cost",
      cell: ({ row }) => {
        const amount = row.original.cost
        return <span className="capitalize">{formatCurrency({ amount })}</span>
      },
    },
    {
      accessorKey: "base price",
      header: "Base Price",
      cell: ({ row }) => {
        const amount = row.original.base_price
        return <span className="capitalize">{formatCurrency({ amount })}</span>
      },
    },
    {
      accessorKey: "product category",
      header: "Product Category",
      cell: ({ row }) => <span className="capitalize">{row.original.product_category.name}</span>,
    },
    {
      id: "actions",
      enableHiding: false,
      header: "Actions",
      cell: (props) => {
        return <ActionProductsPI {...props} />
      },
    },
  ]

  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: listProducts,
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
    setSelectedProducts(selectedRows)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection])

  useEffect(() => {
    if (selectedProducts.length !== Object.keys(rowSelection).length) {
      const updatedRowSelection = selectedProducts.reduce((acc, item) => {
        const indexItem = listProducts.findIndex((i) => i.id === item.id)
        return { ...acc, [indexItem]: true }
      }, {})

      setRowSelection(updatedRowSelection)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts])

  return (
    <section className={cn("p-4", layout !== "table" ? "hidden" : "")}>
      <DataTable<ProductsPIInterface> table={table} isLoadingData={isLoadingListProducts} />
    </section>
  )
}

export default TableProductsPI
