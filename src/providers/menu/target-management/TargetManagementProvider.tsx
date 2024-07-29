/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch, ReactNode, SetStateAction } from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { TargetManagementTableInterface } from "@/lib/interfaces/menu/target-management/target-management"
import type { SelectType } from "@/lib/types/select"

interface TargertManagementContextData {
  listTargetManagement: TargetManagementTableInterface[]
  isLoadingTargetManagement: boolean
  metaListTargetManagement?: MetaApiResponseInterface

  pageListTargetManagement: number
  setPageListTargetManagement: Dispatch<SetStateAction<number>>

  selectedTargetManagement: TargetManagementTableInterface[]
  setSelectedTargetManagement: Dispatch<SetStateAction<TargetManagementTableInterface[]>>

  searchTargetManagement: string
  setSearchTargetManagement: Dispatch<SetStateAction<string>>

  filter: any
  setFilter: Dispatch<SetStateAction<any>>

  dateSelected: Date
  setDateSelected: Dispatch<SetStateAction<Date>>
}

const TargetManagementContext = createContext<TargertManagementContextData | undefined>(undefined)

function useTargetManagementContext(): TargertManagementContextData {
  const context = useContext(TargetManagementContext)
  if (!context) {
    throw new Error("useTargetManagementContext must be used inside target management wrapper")
  }
  return context
}

function TargetManagementProvider({ children }: { children: ReactNode; targetManagementId?: string }) {
  const [dateSelected, setDateSelected] = useState<Date>(new Date())

  const [pageListTargetManagement, setPageListTargetManagement] = useState<number>(1)
  const [selectedTargetManagement, setSelectedTargetManagement] = useState<TargetManagementTableInterface[]>([])

  const [filter, setFilter] = useState<{
    categoryFilter: string[]
    targetType: {
      search: string
      list: SelectType[]
    }
    targetStatus: {
      search: string
      list: SelectType[]
    }
    department: {
      search: string
      list: SelectType[]
    }
    jobPosition: {
      search: string
      list: SelectType[]
    }
  }>({
    categoryFilter: [],
    targetType: {
      search: "",
      list: [],
    },
    targetStatus: {
      search: "",
      list: [],
    },
    department: {
      search: "",
      list: [],
    },
    jobPosition: {
      search: "",
      list: [],
    },
  })

  const [searchTargetManagement, setSearchTargetManagement] = useState("")
  const [debounceSearchTargetManagement] = useDebounceValue(searchTargetManagement, 500)

  const dataTargetManagement: TargetManagementTableInterface[] = [
    {
      id: "1",
      assignment_id: "ASG-00000001",
      employee: { id: "EMP-0000001", name: "Armin Arlert", type: "Employee" },
      target_name: "Sales Target",
      progress: "0",
      target: "10000000",
      achievement: "",
      gap: "",
      status: "Waiting for Approval",
    },
    {
      id: "2",
      assignment_id: "ASG-00000002",
      employee: { id: "EMP-0000001", name: "Kathryn Muhy", type: "Employee" },
      target_name: "Sales Target",
      progress: "25",
      target: "1000",
      achievement: "",
      gap: "",
      status: "Not Started",
    },
    {
      id: "3",
      assignment_id: "ASG-00000003",
      employee: { id: "EMP-0000001", name: "Marvin McKinney", type: "Employee" },
      target_name: "Sales Target",
      progress: "75",
      target: "100",
      achievement: "",
      gap: "",
      status: "Draft",
    },
    {
      id: "4",
      assignment_id: "ASG-00000004",
      employee: { id: "EMP-0000001", name: "Jane Cooper", type: "Employee" },
      target_name: "Sales Target",
      progress: "50",
      target: "10000000",
      achievement: "2500000",
      gap: "7500000",
      status: "Active",
    },
    {
      id: "5",
      assignment_id: "ASG-00000005",
      employee: { id: "EMP-0000001", name: "Esther Howard", type: "Employee" },
      target_name: "Sales Target",
      progress: "25",
      target: "10000000",
      achievement: "",
      gap: "",
      status: "Declined",
    },
    {
      id: "6",
      assignment_id: "ASG-00000006",
      employee: { id: "EMP-0000001", name: "Robert Fox", type: "Employee" },
      target_name: "Sales Target",
      progress: "75",
      target: "10000000",
      achievement: "2500000",
      gap: "7500000",
      status: "Active",
    },
    {
      id: "7",
      assignment_id: "ASG-00000007",
      employee: { id: "EMP-0000001", name: "Dianne Russell", type: "Employee" },
      target_name: "Sales Target",
      progress: "25",
      target: "10000000",
      achievement: "2500000",
      gap: "",
      status: "Overdue",
    },
    {
      id: "8",
      assignment_id: "ASG-00000008",
      employee: { id: "EMP-0000001", name: "Jenny Wilson", type: "Employee" },
      target_name: "Sales Target",
      progress: "0",
      target: "10000000",
      achievement: "5000000",
      gap: "5000000",
      status: "Canceled",
    },
    {
      id: "9",
      assignment_id: "ASG-00000009",
      employee: { id: "EMP-0000001", name: "Jerome Bell", type: "Employee" },
      target_name: "Sales Target",
      progress: "100",
      target: "10000000",
      achievement: "10000000",
      gap: "0",
      status: "Finished",
    },
    {
      id: "10",
      assignment_id: "ASG-00000010",
      employee: { id: "EMP-0000001", name: "Darrell Steward", type: "Employee" },
      target_name: "Sales Target",
      progress: "75",
      target: "10000000",
      achievement: "2500000",
      gap: "7500000",
      status: "Active",
    },
  ]

  const metaListTargetManagement = {
    total: 10,
    limit: 10,
    page: 1,
    total_page: 1,
  }

  useEffect(() => {
    if (pageListTargetManagement !== 1) {
      setPageListTargetManagement(1)
    }
    setSelectedTargetManagement([])
  }, [debounceSearchTargetManagement, filter])

  return (
    <TargetManagementContext.Provider
      value={{
        listTargetManagement: dataTargetManagement || [],
        isLoadingTargetManagement: false,
        metaListTargetManagement: metaListTargetManagement,
        pageListTargetManagement,
        setPageListTargetManagement,
        selectedTargetManagement,
        setSelectedTargetManagement,
        searchTargetManagement,
        setSearchTargetManagement,
        filter,
        setFilter,
        dateSelected,
        setDateSelected,
      }}
    >
      {children}
    </TargetManagementContext.Provider>
  )
}

export { TargetManagementProvider, useTargetManagementContext }
