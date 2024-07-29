import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { productsApiResponse } from "@/lib/data/products/product-list"
import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"

type usePIProductsListProps = {
  params?: {
    page?: number
    limit?: number
    keyword?: string
    ids?: string[]
    product_category_ids?: string[]
    product_type_ids?: string[]
    sort_field?: string
    sort_direction?: string
  }
}

const usePIProductsList = (props?: usePIProductsListProps) => {
  const [meta, setMeta] = useState<ApiResponseInterface<ProductsPIInterface[]>["meta"]>()

  const getPIProductsListFn = async () => {
    try {
      const response = productsApiResponse

      setMeta(response.meta)

      return response.data
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi products list")
    }
  }

  const query = useQuery({
    queryKey: [
      "pi-products-list",
      props?.params?.page,
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.product_category_ids,
      props?.params?.product_type_ids,
      props?.params?.sort_field,
      props?.params?.sort_direction,
    ],
    queryFn: getPIProductsListFn,
  })

  return { ...query, meta }
}
export default usePIProductsList
