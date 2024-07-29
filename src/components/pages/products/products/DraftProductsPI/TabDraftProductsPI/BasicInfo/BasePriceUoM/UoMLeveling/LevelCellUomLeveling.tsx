import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIInfiniteUomLevelList from "@/api/products/uom-level/usePIInfiniteUomLevelList"
import Combobox from "@/components/custom/Combobox"
import type { UomLevelsProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const LevelCellUomLeveling = ({ data: dataUomLevels }: { data: UomLevelsProductsPIInterface }) => {
  const { key, name } = dataUomLevels

  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  // const { mutate: mutateCreate, isPending: isPendingCreate } = usePICreateUomLevel({
  //   onSuccess: (data) => {
  //     setBasicInfo((prev) => ({
  //       ...prev,
  //       uom_levels: prev?.uom_levels?.map((item) =>
  //         item.key === key ? { ...item, id: data.id, name: data.name } : item
  //       ),
  //     }))
  //   },
  //   onError: () => {
  //     toast.error("Error create uom level")
  //   },
  // })

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = usePIInfiniteUomLevelList({
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

    const filteredIdUom = basicInfo.uom_levels?.map((item) => item?.id || "") || []

    return {
      listSelectData: data.pages.flat().map((item) => ({
        label: item.name,
        value: item.id,
        disabled: filteredIdUom.includes(item.id) || item.id === basicInfo.base_uom?.id,
      })),
      listRawData: data.pages.flat(),
    }
  }, [basicInfo.base_uom?.id, basicInfo.uom_levels, data])

  return (
    <Combobox
      data={listData.listSelectData}
      isHasMoreNextPage={hasNextPage}
      onFetchNextPage={fetchNextPage}
      isLoadingData={isLoading || isFetchingNextPage}
      isLoadingValue={false}
      value={name}
      onValueChange={(_, rawValue) => {
        setBasicInfo((prev) => ({
          ...prev,
          uom_levels: prev?.uom_levels?.map((item) =>
            item.key === key ? { ...item, id: rawValue.value, name: rawValue.label } : item
          ),
        }))
      }}
      search={search}
      onSearchChange={setSearch}
      onSelectCreate={() => {}}
      contentClassName="w-[350px]"
      triggerClassName="border-none hover:bg-transparent bg-transparent focus-visible:ring-0"
      placeholder="Type Level"
      placeholderSearch="Search Level..."
    />
  )
}

export default LevelCellUomLeveling
