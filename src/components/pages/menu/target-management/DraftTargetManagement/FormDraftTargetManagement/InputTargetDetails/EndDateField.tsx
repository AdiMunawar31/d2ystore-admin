"use client"

import { endOfMonth } from "date-fns"
import DatePicker from "@/components/custom/DatePicker"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const EndDateField = () => {
  const { detailTargetManagement } = useDraftTargetManagementContext()

  return (
    <div className="block">
      <Label htmlFor="interval-type">End Date</Label>
      <DatePicker
        mode="single"
        disabled
        formatDisplay="dd/MM/yyyy"
        selected={endOfMonth(detailTargetManagement?.period ?? new Date())}
      />
    </div>
  )
}

export default EndDateField
