import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListJobPositions from "@/api/menu/target-management/configuration/job-position/useInfiniteListJobPosition"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const JobPositionField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  const [search, setSearch] = useState("")

  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListJobPositions({
    params: {
      keyword: debounceSearch,
      department_ids: detailTargetManagement?.department?.id,
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
      listSelectData: data.pages.flat().map((item: any) => ({
        label: item.name,
        value: item.id,
        inherit: item.inherit,
      })),
      listRawData: data.pages.flat(),
    }
  }, [data])

  return (
    <div className="block">
      <Label htmlFor="department">Job Position</Label>

      <Combobox
        disabled={!detailTargetManagement?.department?.id}
        data={listData.listSelectData}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={detailTargetManagement?.job_position?.name}
        onValueChange={(_, rawValue) =>
          setDetailTargetManagement((prev) => {
            return {
              ...prev,
              job_position: { id: rawValue.value, name: rawValue.label, inherit: rawValue.inherit },
              salesman_division: {},
            }
          })
        }
        search={search}
        onSearchChange={setSearch}
        placeholder="Select Job Position"
        placeholderSearch="Search Job Position..."
      />
    </div>
  )
}

export default JobPositionField
