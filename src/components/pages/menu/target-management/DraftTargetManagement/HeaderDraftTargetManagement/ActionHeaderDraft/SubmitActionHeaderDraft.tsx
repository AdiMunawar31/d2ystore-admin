"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const SubmitActionHeaderDraft = () => {
  const router = useRouter()

  const { targetManagementId, detailTargetManagement } = useDraftTargetManagementContext()

  const handleSubmit = () => {
    router.replace(`/menu/target-management`)
    toast.success("New target master has been created successfully")
    return
  }

  return (
    <Button
      disabled={!detailTargetManagement?.name?.length}
      variant={!detailTargetManagement?.name?.length ? "disabled" : "primary"}
      onClick={handleSubmit}
      // isLoading={isPendingCreate || isPendingEdit}
    >
      {targetManagementId ? "Save Changes" : "Submit"}
    </Button>
  )
}

export default SubmitActionHeaderDraft
