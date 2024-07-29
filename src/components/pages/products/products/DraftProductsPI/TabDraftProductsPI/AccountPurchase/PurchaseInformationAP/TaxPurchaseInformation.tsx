"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListTaxes from "@/api/journal/taxes/useInfiniteListTaxes"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const TaxPurchaseInformation = () => {
  const { accountPurchase, setAccountPurchase } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListTaxes({
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
      <Label>Purchasing Tax</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Purchasing Tax"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={accountPurchase.purchasing?.tax?.name}
        onValueChange={(_, rawValue) => {
          setAccountPurchase((prev) => ({
            ...prev,
            purchasing: {
              ...prev.purchasing,
              tax: {
                id: rawValue.value,
                name: rawValue.label,
                value: "",
              },
            },
          }))
        }}
        search={search}
        onSearchChange={setSearch}
      />
    </div>
  )
}

export default TaxPurchaseInformation
