"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListCOA from "@/api/products/chart-of-account/useInfiniteListCOA"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const IncomeAccountInformation = () => {
  const { accountPurchase, setAccountPurchase } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListCOA({
    params: {
      keyword: debounceSearch,
      account_type_number: 4,
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
      <Label required>Income Account</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Income Account"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        value={accountPurchase.accounting.income_account.name}
        onValueChange={(_, rawValue) => {
          setAccountPurchase((prev) => ({
            ...prev,
            accounting: {
              ...prev.accounting,
              income_account: {
                id: rawValue.value,
                name: rawValue.label,
                code: "",
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

export default IncomeAccountInformation
