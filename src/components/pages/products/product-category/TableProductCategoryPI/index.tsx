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
import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"
import { useProductCategoryPIContext } from "@/providers/products/product-category/ProductCategoryPIProvider"
import ActionProductCategoryPI from "./ActionProductCategoryPI"

const TableProductCategoryPI = () => {
  const {
    sort,
    setSort,
    listProductCategory,
    isLoadingListProductCategory,
    selectedProductCategory,
    setSelectedProductCategory,
  } = useProductCategoryPIContext()

  console.log("list cat : ", listProductCategory)

  const columns: ColumnDef<ProductCategoryPIInterface>[] = [
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
      accessorKey: "product category ID",
      header: "Product Category ID",
      cell: ({ row }) => {
        return <span className="font-medium">{row.original.code || "-"}</span>
      },
    },
    {
      accessorKey: "product category name",
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
      header: "Parent",
      cell: ({ row }) => <span className="capitalize">{row.original.parent?.name || "-"}</span>,
    },
    {
      id: "actions",
      enableHiding: false,
      header: "Actions",
      cell: (props) => {
        return <ActionProductCategoryPI {...props} />
      },
    },
  ]

  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: listProductCategory,
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
    setSelectedProductCategory(selectedRows)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection])

  useEffect(() => {
    if (selectedProductCategory.length !== Object.keys(rowSelection).length) {
      const updatedRowSelection = selectedProductCategory.reduce((acc, item) => {
        const indexItem = listProductCategory.findIndex((i) => i.id === item.id)
        return { ...acc, [indexItem]: true }
      }, {})

      setRowSelection(updatedRowSelection)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProductCategory])

  return (
    <section className="p-4">
      <DataTable<ProductCategoryPIInterface> table={table} isLoadingData={isLoadingListProductCategory} />
    </section>
  )
}

export default TableProductCategoryPI
