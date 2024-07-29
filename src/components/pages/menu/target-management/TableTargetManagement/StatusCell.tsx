import type { CellContext } from "@tanstack/react-table"
import { Status } from "@/lib/enums/target-management"
import type { TargetManagementTableInterface } from "@/lib/interfaces/menu/target-management/target-management"
import { cn } from "@/lib/utils"

type StatusCellProps = object & CellContext<TargetManagementTableInterface, unknown>

const StatusCell = ({ row }: StatusCellProps) => {
  const data = row.original

  return (
    <span
      className={cn(
        "whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium capitalize",
        data.status === Status.WAITING_FOR_APPROVAL && "bg-[#EE9E1E] text-[#FDF5E7]",
        data.status === Status.NOT_STARTED && "bg-[#FDF5E7] text-[#EE9E1E]",
        data.status === Status.DRAFT && "bg-[#F6F8FC] text-[#667A8E]",
        data.status === Status.ACTIVE && "bg-[#EDF8ED] text-[#499A66]",
        data.status === Status.DECLINED && "bg-[#F4C3CD] text-[#AD2D44]",
        data.status === Status.OVERDUE && "bg-[#E73C5D] text-[#FFFFFF]",
        data.status === Status.CANCELED && "bg-[#FBECEF] text-[#E73C5D]",
        data.status === Status.FINISHED && "bg-[#499A66] text-[#FFFFFF]"
      )}
    >
      {data.status}
    </span>
  )
}

export default StatusCell
