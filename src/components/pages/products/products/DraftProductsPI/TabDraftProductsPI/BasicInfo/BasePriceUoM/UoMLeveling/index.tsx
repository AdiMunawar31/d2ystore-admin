"use client"

import { useEffect } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { PlusIcon } from "lucide-react"
import { ulid } from "ulidx"
import DataTable from "@/components/custom/DataTable"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import type { UomLevelsProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"
import ActionCellUomLeveling from "./ActionCellUomLeveling"
import BaseUomCellUomLeveling from "./BaseUomCellUomLeveling"
import ConversionCellUomLeveling from "./ConversionCellUomLeveling"
import LevelCellUomLeveling from "./LevelCellUomLeveling"
import QtyCellUomLeveling from "./QtyCellUomLeveling"
import UomCellUomLeveling from "./UomCellUomLeveling"

const columns: ColumnDef<UomLevelsProductsPIInterface>[] = [
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row }) => {
      return <LevelCellUomLeveling data={row.original} />
    },
  },
  {
    accessorKey: "quantity",
    header: () => "QTY",
    cell: ({ row }) => {
      return <QtyCellUomLeveling data={row.original} />
    },
  },
  {
    accessorKey: "uom",
    header: "UoM",
    cell: ({ row }) => {
      return <UomCellUomLeveling data={row.original} />
    },
  },
  {
    accessorKey: "conversion",
    header: () => "Conversion",
    cell: ({ row }) => {
      return <ConversionCellUomLeveling data={row.original} />
    },
  },
  {
    accessorKey: "base_uom",
    header: "Base UoM",
    cell: ({ row }) => <BaseUomCellUomLeveling data={row.original} />,
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      return <ActionCellUomLeveling data={row.original} />
    },
  },
]

const UoMLeveling = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const table = useReactTable({
    data: basicInfo?.uom_levels || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  useEffect(() => {
    const uomLevel = basicInfo.uom_levels || []
    if (basicInfo.base_uom && uomLevel?.length <= 0) {
      setBasicInfo((prev) => ({
        ...prev,
        uom_levels:
          prev.uom_levels && prev.uom_levels.length > 0
            ? prev.uom_levels
            : [
                {
                  key: ulid(),
                },
              ],
      }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicInfo.base_uom, setBasicInfo])

  const dataUomLevel = basicInfo.uom_levels || []

  return (
    <div className="mb-4 mt-4 flex flex-col gap-3">
      <DataTable
        table={table}
        removeSettingColumn
        removeNullState
        cellClassName="p-0"
        footerComponent={
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={columns.length} className="py-2">
              {dataUomLevel?.length > 0 ? (
                <div className="flex items-center justify-center">
                  <Button
                    variant="ghost-primary"
                    onClick={() => {
                      setBasicInfo((prev) => ({
                        ...prev,
                        uom_levels: [
                          ...(prev.uom_levels || []),
                          {
                            key: ulid(),
                          },
                        ],
                      }))
                    }}
                  >
                    <PlusIcon />
                    Add New Level
                  </Button>
                </div>
              ) : null}
            </TableCell>
          </TableRow>
        }
      />
    </div>
  )
}

export default UoMLeveling
