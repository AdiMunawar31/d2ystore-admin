"use client"

import type { Dispatch, ReactNode, SetStateAction } from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import usePIProductsList from "@/api/products/products/usePIProductsList"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"
import type { ProductTypePIInterface } from "@/lib/interfaces/products/product/product-type"
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"

interface ProductsPIContextData {
  listProducts: ProductsPIInterface[]
  isLoadingListProducts: boolean
  metaListProducts?: MetaApiResponseInterface

  searchProducts: string
  setSearchProducts: Dispatch<SetStateAction<string>>

  filterProducts: {
    productType: ProductTypePIInterface[]
    productCategory: ProductCategoryPIInterface[]
  }
  setFilterProducts: Dispatch<
    SetStateAction<{
      productType: ProductTypePIInterface[]
      productCategory: ProductCategoryPIInterface[]
    }>
  >

  pageListProducts: number
  setPageListProducts: Dispatch<SetStateAction<number>>

  selectedProducts: ProductsPIInterface[]
  setSelectedProducts: Dispatch<SetStateAction<ProductsPIInterface[]>>

  layout: "table" | "grid"
  setLayout: Dispatch<SetStateAction<"table" | "grid">>

  sort: string
  setSort: Dispatch<SetStateAction<string>>
}

const ProductsPIContext = createContext<ProductsPIContextData | undefined>(undefined)

function useProductsPIContext(): ProductsPIContextData {
  const context = useContext(ProductsPIContext)
  if (!context) {
    throw new Error("useProductsPIContext must be used within a ProductsPIProvider")
  }
  return context
}

function ProductsPIProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<"table" | "grid">("table")
  const [selectedProducts, setSelectedProducts] = useState<ProductsPIInterface[]>([])

  const [searchProducts, setSearchProducts] = useState("")
  const [filterProducts, setFilterProducts] = useState<{
    productType: ProductTypePIInterface[]
    productCategory: ProductCategoryPIInterface[]
  }>({
    productType: [],
    productCategory: [],
  })
  const [pageListProducts, setPageListProducts] = useState(1)
  const [sort, setSort] = useState("ASC")

  const [debounceSearchProducts] = useDebounceValue(searchProducts, 500)

  const {
    data: listProducts,
    isLoading: isLoadingListProducts,
    meta: metaListProducts,
  } = usePIProductsList({
    params: {
      page: pageListProducts,
      keyword: debounceSearchProducts,
      product_type_ids: filterProducts.productType.map((item) => item.id),
      product_category_ids: filterProducts.productCategory.map((item) => item.id),
      sort_field: "name",
      sort_direction: sort,
    },
  })

  useEffect(() => {
    if (pageListProducts !== 1) {
      setPageListProducts(1)
    }
    setSelectedProducts([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearchProducts])

  return (
    <ProductsPIContext.Provider
      value={{
        listProducts: listProducts || [],
        isLoadingListProducts,
        metaListProducts,

        searchProducts,
        setSearchProducts,

        filterProducts,
        setFilterProducts,

        pageListProducts,
        setPageListProducts,

        selectedProducts,
        setSelectedProducts,

        layout,
        setLayout,

        sort,
        setSort,
      }}
    >
      {children}
    </ProductsPIContext.Provider>
  )
}

export { ProductsPIProvider, useProductsPIContext }
