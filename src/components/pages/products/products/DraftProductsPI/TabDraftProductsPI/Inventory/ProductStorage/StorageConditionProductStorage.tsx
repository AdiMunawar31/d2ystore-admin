"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIInfiniteStorageConditionList from "@/api/products/storage-condition/usePIInfiniteStorageConditionList"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const StorageConditionProductStorage = () => {
  const { inventory, setInventory } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  // const { mutate: mutateCreate, isPending: isPendingCreate } = usePICreateStorageCondition({
  //   onSuccess: (data) => {
  //     setInventory((prev) => ({
  //       ...prev,
  //       storage: {
  //         ...prev.storage,
  //         storage_condition: {
  //           id: data.id,
  //           name: data.name,
  //         },
  //       },
  //     }))
  //   },
  //   onError: () => {
  //     toast.error("Error create storage condition")
  //   },
  // })

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = usePIInfiniteStorageConditionList({
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
    <div className="block w-full">
      <Label>Storage Condition</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Storage Condition"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        isLoadingValue={false}
        value={inventory.storage.storage_condition?.name}
        onValueChange={(_, rawValue) => {
          setInventory((prev) => ({
            ...prev,
            storage: {
              ...prev.storage,
              storage_condition: {
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

export default StorageConditionProductStorage
