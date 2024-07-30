import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { productCategoryListApiResponse } from "@/lib/data/products/product-category-list"
import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"

type usePIProductCategoryListProps = {
  params?: {
    page?: number
    limit?: number
    keyword?: string
    ids?: string[]
    parent_id?: string
    sort_field?: string
    sort_direction?: string
  }
}

const usePIProductCategoryList = (props?: usePIProductCategoryListProps) => {
  const [meta, setMeta] = useState<ApiResponseInterface<ProductCategoryPIInterface[]>["meta"]>()

  const getPIProductCategoryListFn = async () => {
    try {
      const response = productCategoryListApiResponse

      setMeta(response.meta)

      return response.data
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi product category list")
    }
  }

  const query = useQuery({
    queryKey: [
      "pi-product-category-list",
      props?.params?.page,
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.parent_id,
      props?.params?.sort_field,
      props?.params?.sort_direction,
    ],
    queryFn: getPIProductCategoryListFn,
  })

  return { ...query, meta }
}
export default usePIProductCategoryList
