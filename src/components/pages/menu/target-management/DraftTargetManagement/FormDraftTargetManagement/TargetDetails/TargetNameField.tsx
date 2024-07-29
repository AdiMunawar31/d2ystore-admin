"use client"

import { useMemo } from "react"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const targetDetailsTempData = [
  {
    id: "1",
    name: "TRG ID - Target Salesman123",
    target_description: "Target Salesman",
    target_unit: "value",
    interval_type: { name: "Monthly" },
  },
]

const TargetNameField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()

  const listData = useMemo(() => {
    if (!targetDetailsTempData) {
      return {
        listSelectData: [],
        listRawData: [],
      }
    }

    return {
      listSelectData: targetDetailsTempData.map((item) => ({
        label: item.name,
        value: item.id,
      })),
      listRawData: targetDetailsTempData,
    }
  }, [])

  return (
    <div className="block">
      <Label htmlFor="interval-type">Target Name</Label>

      <Combobox
        data={listData.listSelectData}
        value={detailTargetManagement?.target_details?.name}
        onValueChange={(_, rawValue) => {
          const selectedTargetDetail = listData.listRawData.find((e) => e.id === rawValue.value)
          return setDetailTargetManagement((prev) => ({ ...prev, target_details: selectedTargetDetail }))
        }}
        placeholder="Select Target"
        placeholderSearch="Search Target..."
      />
    </div>
  )
}

export default TargetNameField
