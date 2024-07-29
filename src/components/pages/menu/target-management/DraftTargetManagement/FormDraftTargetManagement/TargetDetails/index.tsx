"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"
import TargetNameField from "./TargetNameField"

const TargetDetails = () => {
  const { detailTargetManagement } = useDraftTargetManagementContext()
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Target Details</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <TargetNameField />
        {detailTargetManagement?.target_details?.id && (
          <div className="block">
            <Label htmlFor="target-desc">Target Description</Label>
            <Input
              readOnly
              id="target-desc"
              type="text"
              value={detailTargetManagement?.target_details?.target_description || "-"}
              wrapClassName="w-full text-neutral-grey-600-body-text"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default TargetDetails
