"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIProductCategoryList from "@/api/products/product-category/usePIProductCategoryList"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"

interface ProductCategoryContextData {
  listProductCategory: ProductCategoryPIInterface[]
  isLoadingListProductCategory: boolean
  metaListProductCategory?: MetaApiResponseInterface

  searchProductCategory: string
  setSearchProductCategory: Dispatch<SetStateAction<string>>

  pageListProductCategory: number
  setPageListProductCategory: Dispatch<SetStateAction<number>>

  selectedProductCategory: ProductCategoryPIInterface[]
  setSelectedProductCategory: Dispatch<SetStateAction<ProductCategoryPIInterface[]>>

  sort: string
  setSort: Dispatch<SetStateAction<string>>
}

const ProductCategoryContext = createContext<ProductCategoryContextData | undefined>(undefined)

function useProductCategoryPIContext(): ProductCategoryContextData {
  const context = useContext(ProductCategoryContext)
  if (!context) {
    throw new Error("useProductCategoryPIContext must be used within a ProductCategoryPIProvider")
  }
  return context
}

function ProductCategoryPIProvider({ children }: { children: ReactNode }) {
  const [selectedProductCategory, setSelectedProductCategory] = useState<ProductCategoryPIInterface[]>([])

  const [searchProductCategory, setSearchProductCategory] = useState("")
  const [pageListProductCategory, setPageListProductCategory] = useState(1)
  const [sort, setSort] = useState("ASC")

  const [debounceSearchProductCategory] = useDebounceValue(searchProductCategory, 500)

  const {
    data: listProductCategory,
    isLoading: isLoadingListProductCategory,
    meta: metaListProductCategory,
  } = usePIProductCategoryList({
    params: {
      page: pageListProductCategory,
      keyword: debounceSearchProductCategory,
      sort_field: "name",
      sort_direction: sort,
    },
  })

  useEffect(() => {
    if (pageListProductCategory !== 1) {
      setPageListProductCategory(1)
    }
    setSelectedProductCategory([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearchProductCategory])

  return (
    <ProductCategoryContext.Provider
      value={{
        listProductCategory: listProductCategory || [],
        isLoadingListProductCategory,
        metaListProductCategory,
        searchProductCategory,
        setSearchProductCategory,
        pageListProductCategory,
        setPageListProductCategory,
        selectedProductCategory,
        setSelectedProductCategory,
        sort,
        setSort,
      }}
    >
      {children}
    </ProductCategoryContext.Provider>
  )
}

export { ProductCategoryPIProvider, useProductCategoryPIContext }
