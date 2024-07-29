"use client"

import Breadcrumb from "@/components/custom/Breadcrumb"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const DetailHeaderDraft = () => {
  const { targetManagementId, dataTargetManagement } = useDraftTargetManagementContext()

  return (
    <section className="flex flex-col">
      <Breadcrumb
        data={[
          {
            label: "Target Management",
            link: "/menu/target-management",
          },
          {
            label: targetManagementId ? "Detail Target Management" : "Assign Target Management",
            link: `/menu/target-management/${targetManagementId ?? "add"}`,
          },
        ]}
      />

      <h5 className="text-xs text-neutral-grey-600-body-text">
        {targetManagementId ? dataTargetManagement?.name : "Draft Target Management"}
      </h5>
    </section>
  )
}

export default DetailHeaderDraft
