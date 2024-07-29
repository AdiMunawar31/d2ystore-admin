"use client"

import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { IntervalTypes } from "@/lib/enums/target-management"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const IntervalTypeList = [
  {
    value: IntervalTypes.Daily,
    label: IntervalTypes.Daily,
  },
  {
    value: IntervalTypes.Monthly,
    label: IntervalTypes.Monthly,
  },
  {
    value: IntervalTypes.Quarterly,
    label: IntervalTypes.Quarterly,
  },
  {
    value: IntervalTypes.Annually,
    label: IntervalTypes.Annually,
  },
  {
    value: IntervalTypes.Custom,
    label: IntervalTypes.Custom,
  },
]

const IntervalTypeField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()

  return (
    <div className="block">
      <Label htmlFor="interval-type">Interval Type</Label>

      <Combobox
        disabled
        data={IntervalTypeList}
        value={detailTargetManagement?.target_details?.interval_type?.name ?? "-"}
        onValueChange={(_, rawValue) =>
          setDetailTargetManagement((prev) => {
            return {
              ...prev,
              target_details: { ...prev.target_details, interval_type: { id: rawValue.value, name: rawValue.label } },
            }
          })
        }
        placeholder="Choose Interval Type"
        placeholderSearch="Search Interval Type..."
      />
    </div>
  )
}

export default IntervalTypeField
