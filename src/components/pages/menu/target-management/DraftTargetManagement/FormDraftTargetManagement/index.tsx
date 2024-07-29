"use client"

import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"
import EmployeeSelection from "./EmployeeSelection/index"
import InputTargetDetails from "./InputTargetDetails/index"
import TargetDetails from "./TargetDetails/index"

const FormDraftTargetManagement = () => {
  const { detailTargetManagement } = useDraftTargetManagementContext()
  return (
    <div className="flex flex-col gap-4 p-4">
      <EmployeeSelection />
      <TargetDetails />
      {detailTargetManagement?.target_details?.id && <InputTargetDetails />}
    </div>
  )
}
export default FormDraftTargetManagement
