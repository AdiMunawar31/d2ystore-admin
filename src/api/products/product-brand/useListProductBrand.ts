import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { productBrandListApiResponse } from "@/lib/data/products/product-brand-list"
import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"

type useProductBrandListProps = {
  params?: {
    page?: number
    limit?: number
    keyword?: string
    sort_field?: string
    sort_direction?: string
  }
}

const useProductBrandList = (props?: useProductBrandListProps) => {
  const [meta, setMeta] = useState<ApiResponseInterface<ProductBrandInterface[]>["meta"]>()

  const getProductBrandListFn = async () => {
    try {
      const response = productBrandListApiResponse
      setMeta(response.meta)
      return response.data
    } catch (error) {
      throw new Error("error fetch product brand list")
    }
  }

  const query = useQuery({
    queryKey: [
      "product-brand-list",
      props?.params?.page,
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.sort_field,
      props?.params?.sort_direction,
    ],
    queryFn: getProductBrandListFn,
  })

  return { ...query, meta }
}
export default useProductBrandList
