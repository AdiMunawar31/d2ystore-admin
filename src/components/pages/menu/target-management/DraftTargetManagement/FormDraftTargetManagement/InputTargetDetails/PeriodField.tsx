"use client"

import { format, isValid } from "date-fns"
import MonthPicker from "@/components/custom/MonthPicker"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const PeriodField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  const period = detailTargetManagement?.period

  const month = period && isValid(period) ? format(period, "MMMM") : ""
  const year = period && isValid(period) ? format(period, "yyyy") : ""
  const formatted = `${month} ${year}`

  return (
    <div className="block">
      <Label htmlFor="interval-type">Period</Label>
      <MonthPicker
        selected={detailTargetManagement?.period}
        onSelect={(value: any) => setDetailTargetManagement((prev) => ({ ...prev, period: value }))}
        customDisplay={formatted}
      />
    </div>
  )
}

export default PeriodField
