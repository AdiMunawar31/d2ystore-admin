import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfinitSalesmanDivisionList from "@/api/menu/target-management/useInfiniteSalesmanDivisionList"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const SalesmanDivisionField = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  const [search, setSearch] = useState("")

  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfinitSalesmanDivisionList({
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
      listSelectData: data.pages.flat().map((item: any) => ({
        label: item.name,
        value: item.id,
      })),
      listRawData: data.pages.flat(),
    }
  }, [data])

  return (
    <div className="block">
      <Label htmlFor="department">Salesman Division</Label>

      <Combobox
        data={listData.listSelectData}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={detailTargetManagement?.salesman_division?.name}
        onValueChange={(_, rawValue) =>
          setDetailTargetManagement((prev) => {
            return { ...prev, salesman_division: { id: rawValue.value, name: rawValue.label } }
          })
        }
        search={search}
        onSearchChange={setSearch}
        placeholder="Select Salesman Division"
        placeholderSearch="Search Salesman Division..."
      />
    </div>
  )
}

export default SalesmanDivisionField
