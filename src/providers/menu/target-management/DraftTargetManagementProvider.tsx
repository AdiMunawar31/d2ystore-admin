import { createContext, useContext, useState } from "react"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import type { DraftTargetManagement } from "@/lib/interfaces/menu/target-management/target-management"

interface DraftTargetManagementContextData {
  targetManagementId?: string
  dataTargetManagement?: DraftTargetManagement
  isLoadingDataTargetManagement?: boolean

  detailTargetManagement: DraftTargetManagement
  setDetailTargetManagement: Dispatch<SetStateAction<DraftTargetManagement>>
}

const DraftTargetManagementContext = createContext<DraftTargetManagementContextData | undefined>(undefined)

function useDraftTargetManagementContext(): DraftTargetManagementContextData {
  const context = useContext(DraftTargetManagementContext)
  if (!context) {
    throw new Error("useDraftTargetManagementContext must be used within a DraftTargetManagementProvider")
  }
  return context
}

type DraftTargetManagementSProviderProps = {
  children: ReactNode
  targetManagementId?: string
  dataTargetManagement?: DraftTargetManagement
  isLoadingDataTargetManagement?: boolean
}

const DraftTargetManagementProvider = ({
  children,
  targetManagementId,
  dataTargetManagement,
  isLoadingDataTargetManagement,
}: DraftTargetManagementSProviderProps) => {
  const [detailTargetManagement, setDetailTargetManagement] = useState<DraftTargetManagement>({
    name: "",
    period: new Date(),
  })

  return (
    <DraftTargetManagementContext.Provider
      value={{
        targetManagementId,
        dataTargetManagement,
        isLoadingDataTargetManagement,

        detailTargetManagement,
        setDetailTargetManagement,
      }}
    >
      {children}
    </DraftTargetManagementContext.Provider>
  )
}

export { DraftTargetManagementProvider, useDraftTargetManagementContext }
