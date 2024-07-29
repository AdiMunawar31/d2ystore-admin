"use client"

import type { Dispatch, ReactNode, SetStateAction } from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useProductBrandList from "@/api/products/product-brand/useListProductBrand"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"

interface ProductBrandContextData {
  listProductBrand: ProductBrandInterface[]
  metaListProductBrand?: MetaApiResponseInterface
  isLoadingListProductBrand: boolean

  searchProductBrand: string
  setSearchProductBrand: Dispatch<SetStateAction<string>>

  pageListProductBrand: number
  setPageListProductBrand: Dispatch<SetStateAction<number>>

  selectedProductBrand: ProductBrandInterface[]
  setSelectedProductBrand: Dispatch<SetStateAction<ProductBrandInterface[]>>

  sort: string
  setSort: Dispatch<SetStateAction<string>>
}

const ProductBrandContext = createContext<ProductBrandContextData | undefined>(undefined)

function useProductBrandContext(): ProductBrandContextData {
  const context = useContext(ProductBrandContext)
  if (!context) {
    throw new Error("useProductBrandContext must be used within a ProductBrandProvider")
  }
  return context
}

function ProductBrandProvider({ children }: { children: ReactNode }) {
  const [selectedProductBrand, setSelectedProductBrand] = useState<ProductBrandInterface[]>([])

  const [searchProductBrand, setSearchProductBrand] = useState("")
  const [pageListProductBrand, setPageListProductBrand] = useState(1)
  const [sort, setSort] = useState("ASC")

  const [debounceSearchProductBrand] = useDebounceValue(searchProductBrand, 500)

  const {
    data: listProductBrand,
    isLoading: isLoadingListProductBrand,
    meta: metaListProductBrand,
  } = useProductBrandList({
    params: {
      page: pageListProductBrand,
      keyword: debounceSearchProductBrand,
      sort_field: "name",
      sort_direction: sort,
    },
  })

  useEffect(() => {
    if (pageListProductBrand !== 1) {
      setPageListProductBrand(1)
    }
    setSelectedProductBrand([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearchProductBrand])

  return (
    <ProductBrandContext.Provider
      value={{
        listProductBrand: listProductBrand || [],
        metaListProductBrand,
        isLoadingListProductBrand,

        searchProductBrand,
        setSearchProductBrand,

        pageListProductBrand,
        setPageListProductBrand,

        selectedProductBrand,
        setSelectedProductBrand,

        sort,
        setSort,
      }}
    >
      {children}
    </ProductBrandContext.Provider>
  )
}

export { ProductBrandProvider, useProductBrandContext }
