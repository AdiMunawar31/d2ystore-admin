import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListEmployee from "@/api/menu/target-management/useInfiniteEmployeeList"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const EmployeeField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  const [search, setSearch] = useState("")

  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListEmployee({
    params: {
      keyword: debounceSearch,
    },
  })

  const listData = useMemo(() => {
    if (!data) {
      return {
        listSelectData: [],
        listRawData: [],
      }
    }

    return {
      listSelectData: data.pages.flat().map((item) => ({
        label: item.name,
        value: item.id,
      })),
      listRawData: data.pages.flat(),
    }
  }, [data])

  return (
    <div className="block">
      <Label htmlFor="department">Employee Name</Label>

      <Combobox
        data={listData.listSelectData}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={detailTargetManagement?.employee?.name}
        onValueChange={(_, rawValue) => {
          const selectedEmployee = listData.listRawData.find((e) => e.id === rawValue.value)
          return setDetailTargetManagement((prev) => ({
            ...prev,
            employee: {
              id: rawValue.value,
              name: rawValue.label,
              code: selectedEmployee?.employee_number,
              external_code: selectedEmployee?.external_code,
            },
          }))
        }}
        search={search}
        onSearchChange={setSearch}
        placeholder="Select Employee Name"
        placeholderSearch="Search Employee Name..."
      />
    </div>
  )
}

export default EmployeeField
