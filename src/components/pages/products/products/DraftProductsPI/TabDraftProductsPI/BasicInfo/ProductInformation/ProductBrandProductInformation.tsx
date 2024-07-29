"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListProductBrand from "@/api/products/product-brand/useInfiniteListProductBrand"
import Combobox from "@/components/custom/Combobox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ProductBrandProductInformation = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  // const { mutate: mutateCreate, isPending: isPendingCreate } = useAddProductBrand({
  //   onSuccess: (data) => {
  //     setBasicInfo((prev) => ({
  //       ...prev,
  //       product_brand: {
  //         id: data.id,
  //         name: data.name,
  //       },
  //     }))
  //   },
  //   onError: () => {
  //     toast.error("Error create product brand")
  //   },
  // })

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListProductBrand({
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
      <Label required>Product Brand</Label>
      <Combobox
        data={listData.listSelectData}
        placeholder={"Choose Product Brand"}
        isHasMoreNextPage={hasNextPage}
        onFetchNextPage={fetchNextPage}
        isLoadingData={isLoading || isFetchingNextPage}
        isLoadingValue={false}
        value={basicInfo.product_brand?.name}
        onValueChange={(_, rawValue) => {
          setBasicInfo((prev) => ({
            ...prev,
            product_brand: {
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

export default ProductBrandProductInformation
