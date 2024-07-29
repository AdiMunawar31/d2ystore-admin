"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIInfiniteProductTypeList from "@/api/products/product-type/usePIInfiniteProductTypeList"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ProductTypeProductInformation = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  // const { mutate: mutateCreate, isPending: isPendingCreate } = usePICreateProductType({
  //   onSuccess: (data) => {
  //     setBasicInfo((prev) => ({
  //       ...prev,
  //       product_type: {
  //         id: data.id,
  //         name: data.name,
  //       },
  //     }))
  //   },
  //   onError: () => {
  //     toast.error("Error create product type")
  //   },
  // })

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = usePIInfiniteProductTypeList({
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
      <Label required>Product Type</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Product Type"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        isLoadingValue={false}
        value={basicInfo.product_type?.name}
        onValueChange={(_, rawValue) => {
          setBasicInfo((prev) => ({
            ...prev,
            product_type: {
              id: rawValue.value,
              name: rawValue.label,
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

export default ProductTypeProductInformation
