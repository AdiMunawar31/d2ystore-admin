"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIInfiniteProductCategoryList from "@/api/products/product-category/usePIInfiniteProductCategoryList"
import Combobox from "@/components/custom/Combobox"
import FormProductCategoryPI from "@/components/pages/products/product-category/FormProductCategoryPI"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const CategoryProductInformation = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  const [openFormCreate, setOpenFormCreate] = useState({
    open: false,
    name: "",
  })

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = usePIInfiniteProductCategoryList({
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
    <>
      <div className="block">
        <Label required>Category</Label>
        <Combobox
          data={listData.listSelectData}
          placeholder={"Choose Category"}
          isHasMoreNextPage={hasNextPage}
          onFetchNextPage={fetchNextPage}
          isLoadingData={isLoading || isFetchingNextPage}
          value={basicInfo.product_category?.name}
          onValueChange={(_, rawValue) => {
            setBasicInfo((prev) => ({
              ...prev,
              product_category: {
                id: rawValue.value,
                name: rawValue.label,
              },
            }))
          }}
          search={search}
          onSearchChange={setSearch}
          onSelectCreate={(value) => {
            setOpenFormCreate(() => ({
              open: true,
              name: value,
            }))
          }}
        />
      </div>

      <FormProductCategoryPI
        data={{
          name: openFormCreate.name,
        }}
        open={openFormCreate.open}
        onOpenChange={(open) => {
          setOpenFormCreate((prev) => ({
            ...prev,
            open,
          }))
        }}
        onSuccessSubmit={(data) => {
          setBasicInfo((prev) => ({
            ...prev,
            product_category: {
              id: data.id,
              name: data.name,
            },
          }))
        }}
        removeTrigger
      />
    </>
  )
}

export default CategoryProductInformation
