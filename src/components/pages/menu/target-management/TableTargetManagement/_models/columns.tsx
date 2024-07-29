import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import type { TargetManagementTableInterface } from "@/lib/interfaces/menu/target-management/target-management"
import { formatCurrency } from "@/lib/utils/formatters"
import ActionCell from "../ActionCell"
import ProgressCell from "../ProgressCell"
import StatusCell from "../StatusCell"

export const COLUMNS: ColumnDef<TargetManagementTableInterface>[] = [
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
    accessorKey: "assignment_id",
    header: "Assignment ID",
    cell: ({ row }) => <span className="whitespace-nowrap">{row.original.assignment_id}</span>,
  },
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <span className="whitespace-nowrap font-semibold text-[#55ABE1]">{row.original.employee.name}</span>
          <span className="whitespace-nowrap uppercase text-gray-400">{row.original.employee.id}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "target_name",
    header: "Target Name",
    cell: ({ row }) => <span>{row.original.target_name ? row.original.target_name : "-"}</span>,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => <ProgressCell progress={row.original.progress ? row.original.progress : "-"} />,
  },
  {
    accessorKey: "target",
    header: "Target",
    cell: ({ row }) => <span>{row.original.target ? formatCurrency({ amount: +row.original.target }) : "-"}</span>,
  },
  {
    accessorKey: "achievement",
    header: "Achievement",
    cell: ({ row }) => (
      <span>{row.original.achievement ? formatCurrency({ amount: +row.original.achievement }) : "-"}</span>
    ),
  },
  {
    accessorKey: "gap",
    header: "Gap",
    cell: ({ row }) => <span>{row.original.gap ? formatCurrency({ amount: +row.original.gap }) : "-"}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <StatusCell {...props} />,
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: (props) => <ActionCell {...props} />,
  },
]
