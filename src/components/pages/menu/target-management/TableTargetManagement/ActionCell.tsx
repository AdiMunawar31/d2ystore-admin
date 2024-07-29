import type { CellContext } from "@tanstack/react-table"
import Link from "next/link"
import { ACTION_LINK, ActionLabel, Status } from "@/lib/enums/target-management"
import type { TargetManagementTableInterface } from "@/lib/interfaces/menu/target-management/target-management"

type ActionCellProps = object & CellContext<TargetManagementTableInterface, unknown>

const ActionCell = ({ row }: ActionCellProps) => {
  const data = row.original

  const getActionLabel = (status: string) => {
    switch (status) {
      case Status.WAITING_FOR_APPROVAL:
        return ActionLabel.REVIEW_ASSIGNMENT
      case Status.NOT_STARTED:
      case Status.ACTIVE:
      case Status.OVERDUE:
        return ActionLabel.UPDATE_ACHIEVEMENT
      case Status.DRAFT:
      case Status.DECLINED:
      case Status.CANCELED:
        return ActionLabel.VIEW_DETAILS
      case Status.FINISHED:
        return ActionLabel.VIEW_ACHIEVEMENT
      default:
        return ActionLabel.UNKNOWN_ACTION
    }
  }

  const getActionLink = (status: string) => {
    switch (status) {
      case Status.WAITING_FOR_APPROVAL:
        return ACTION_LINK.review_assignment
      case Status.NOT_STARTED:
      case Status.ACTIVE:
      case Status.OVERDUE:
        return ACTION_LINK.update_achievement
      case Status.DRAFT:
      case Status.DECLINED:
      case Status.CANCELED:
        return ACTION_LINK.view_details
      case Status.FINISHED:
        return ACTION_LINK.view_achievement
      default:
        return ACTION_LINK.unknown_action
    }
  }

  return (
    <Link href={getActionLink(data.status)} className="whitespace-nowrap text-[#55ABE1]">
      {getActionLabel(data.status)}
    </Link>
  )
}

export default ActionCell
