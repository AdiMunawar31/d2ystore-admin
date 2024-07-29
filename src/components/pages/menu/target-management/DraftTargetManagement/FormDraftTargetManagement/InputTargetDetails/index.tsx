"use client"

import InputCurrency from "@/components/custom/InputCurrency"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"
import EndDateField from "./EndDateField"
import IntervalTypeField from "./IntervalTypeField"
import PeriodField from "./PeriodField"
import StartDateField from "./StartDateField"

const InputTargetDetails = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Input Target Details</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <IntervalTypeField />
        <PeriodField />
        <StartDateField />
        <EndDateField />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="block">
          <Label htmlFor="target-unit">Target Unit</Label>
          <Input
            readOnly
            id="target-unit"
            type="text"
            value={detailTargetManagement?.target_details?.target_unit || "-"}
            wrapClassName="w-full text-neutral-grey-600-body-text"
            className="capitalize"
          />
        </div>

        <div className="block">
          <Label>Set Target Value</Label>
          <InputCurrency
            value={detailTargetManagement.target_value}
            placeholder="0"
            wrapClassName="w-full"
            startContent={<div className="h-full rounded-none border-r p-2 px-3 ">Rp</div>}
            cbValue={(val: number) => {
              setDetailTargetManagement((prev) => ({ ...prev, target_value: val }))
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default InputTargetDetails
