"use client"

import { startOfMonth } from "date-fns"
import DatePicker from "@/components/custom/DatePicker"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const StartDateField = () => {
  const { detailTargetManagement } = useDraftTargetManagementContext()

  return (
    <div className="block">
      <Label htmlFor="interval-type">Start Date</Label>
      <DatePicker
        mode="single"
        disabled
        formatDisplay="dd/MM/yyyy"
        selected={startOfMonth(detailTargetManagement?.period ?? new Date())}
      />
    </div>
  )
}

export default StartDateField
