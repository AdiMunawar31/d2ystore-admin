"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"
import DepartmentField from "./DepartmentField"
import EmployeeField from "./EmployeeField"
import JobPositionField from "./JobPositionField"
import SalesmanDivisionField from "./SalesmanDivisionField"

const EmployeeSelection = () => {
  const { detailTargetManagement } = useDraftTargetManagementContext()
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Employee Selection</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DepartmentField />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <JobPositionField />
          {detailTargetManagement?.job_position?.inherit === "Salesman" && <SalesmanDivisionField />}
        </div>

        <EmployeeField />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="block">
            <Label htmlFor="employee-id">Employee ID</Label>
            <Input
              readOnly
              id="employee-id"
              type="text"
              value={detailTargetManagement?.employee?.code || "-"}
              wrapClassName="w-full text-neutral-grey-600-body-text"
            />
          </div>
          {detailTargetManagement?.employee?.id && (
            <div className="block">
              <Label htmlFor="employee-external-code">Employee External Code</Label>
              <Input
                readOnly
                id="employee-external-code"
                type="text"
                value={detailTargetManagement?.employee?.external_code || "-"}
                wrapClassName="w-full text-neutral-grey-600-body-text"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default EmployeeSelection
