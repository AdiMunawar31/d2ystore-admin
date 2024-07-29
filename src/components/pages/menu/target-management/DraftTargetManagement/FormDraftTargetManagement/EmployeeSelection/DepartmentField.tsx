import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListDepartments from "@/api/menu/target-management/configuration/department/useInfiniteListDepartments"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const DepartmentField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  const [search, setSearch] = useState("")

  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListDepartments({
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
      <Label htmlFor="department">Department</Label>

      <Combobox
        data={listData.listSelectData}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={detailTargetManagement?.department?.name}
        onValueChange={(_, rawValue) =>
          setDetailTargetManagement((prev) => {
            return { ...prev, department: { id: rawValue.value, name: rawValue.label }, job_position: {} }
          })
        }
        search={search}
        onSearchChange={setSearch}
        placeholder="Select Department"
        placeholderSearch="Search Department..."
      />
    </div>
  )
}

export default DepartmentField
