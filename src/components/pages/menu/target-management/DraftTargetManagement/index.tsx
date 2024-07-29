"use client"

import { Loader2 } from "lucide-react"
import { DraftTargetManagementProvider } from "@/providers/menu/target-management/DraftTargetManagementProvider"
import DetailDraftTargetManagement from "./DetailDraftTargetManagement/index"
import FormDraftTargetManagement from "./FormDraftTargetManagement/index"
import HeaderDraftTargetManagement from "./HeaderDraftTargetManagement/index"

type DraftTargetManagementProps = {
  targetManagementId?: string
}

const DraftTargetManagement = ({ targetManagementId }: DraftTargetManagementProps) => {
  const isLoadingDataTargetManagement = false

  if (isLoadingDataTargetManagement) {
    return (
      <div className="flex h-full flex-1 items-center justify-center p-4">
        <span className="animate-spin">
          <Loader2 size={36} />
        </span>
      </div>
    )
  }
  return (
    <DraftTargetManagementProvider targetManagementId={targetManagementId}>
      <HeaderDraftTargetManagement />
      <DetailDraftTargetManagement />
      <FormDraftTargetManagement />
    </DraftTargetManagementProvider>
  )
}

export default DraftTargetManagement
