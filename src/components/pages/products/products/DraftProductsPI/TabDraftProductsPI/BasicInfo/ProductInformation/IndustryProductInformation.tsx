"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteIndustryList from "@/api/hermes/industry/useInfiniteIndustryList"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const IndustryProductInformation = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteIndustryList({
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
      <Label required>Industry</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Industry"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={basicInfo.industry?.name}
        onValueChange={(value) => {
          const dataSelected = listData.listRawData.find((item) => item.id.toLowerCase() === value.toLowerCase())

          setBasicInfo((prev) => ({
            ...prev,
            industry: dataSelected && {
              id: dataSelected.id,
              name: dataSelected.name,
            },
          }))
        }}
        search={search}
        onSearchChange={setSearch}
      />
    </div>
  )
}

export default IndustryProductInformation
