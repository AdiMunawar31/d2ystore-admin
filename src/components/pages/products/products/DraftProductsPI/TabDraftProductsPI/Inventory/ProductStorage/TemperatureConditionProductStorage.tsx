"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIInfiniteTemperatureConditionList from "@/api/products/temperature-condition/usePIInfiniteTemperatureConditionList"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const TemperatureConditionProductStorage = () => {
  const { inventory, setInventory } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  // const { mutate: mutateCreate, isPending: isPendingCreate } = usePICreateTemperatureCondition({
  //   onSuccess: (data) => {
  //     setInventory((prev) => ({
  //       ...prev,
  //       storage: {
  //         ...prev.storage,
  //         temperature_condition: {
  //           id: data.id,
  //           name: data.name,
  //         },
  //       },
  //     }))
  //   },
  //   onError: () => {
  //     toast.error("Error create temperature condition")
  //   },
  // })

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = usePIInfiniteTemperatureConditionList({
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
    <div className="block w-full">
      <Label>Temperature Condition</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Temperature Condition"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        isLoadingValue={false}
        value={inventory.storage.temperature_condition?.name}
        onValueChange={(_, rawValue) => {
          setInventory((prev) => ({
            ...prev,
            storage: {
              ...prev.storage,
              temperature_condition: {
                id: rawValue.value,
                name: rawValue.label,
              },
            },
          }))
        }}
        search={search}
        onSearchChange={setSearch}
        onSelectCreate={() => {}}
      />
    </div>
  )
}

export default TemperatureConditionProductStorage
