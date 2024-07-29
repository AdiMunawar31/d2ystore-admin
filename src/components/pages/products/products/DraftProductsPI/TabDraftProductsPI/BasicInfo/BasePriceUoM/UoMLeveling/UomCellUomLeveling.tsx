import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListUnitOfMeasure from "@/api/products/unit-of-measurement/useInfiniteListUnitOfMeasure"
import Combobox from "@/components/custom/Combobox"
import type { UomLevelsProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const UomCellUomLeveling = ({ data: dataUomLevels }: { data: UomLevelsProductsPIInterface }) => {
  const { key, uom } = dataUomLevels

  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListUnitOfMeasure({
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
    const filteredIdUom = basicInfo.uom_levels?.map((item) => item?.uom?.id || "") || []
    return {
      listSelectData: data.pages.flat().map((item) => ({
        label: item.format,
        value: item.id,
        disabled: filteredIdUom.includes(item.id || "") || item.id === basicInfo.base_uom?.id,
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
      value={uom?.format}
      onValueChange={(value) => {
        const dataSelected = listData.listRawData.find((item) => item.id === value)

        if (!dataSelected) {
          return
        }

        setBasicInfo((prev) => ({
          ...prev,
          uom_levels: prev?.uom_levels?.map((item) =>
            item.key === key
              ? {
                  ...item,
                  uom: {
                    id: dataSelected.id,
                    name: dataSelected.name,
                    code: dataSelected.code,
                    format: dataSelected.format,
                  },
                }
              : item
          ),
        }))
      }}
      search={search}
      onSearchChange={setSearch}
      contentClassName="w-[350px]"
      triggerClassName="border-none hover:bg-transparent bg-transparent focus-visible:ring-0"
      placeholder="Choose UoM"
      placeholderSearch="Search UoM..."
    />
  )
}

export default UomCellUomLeveling
