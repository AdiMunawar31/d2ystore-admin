import { useInfiniteQuery } from "@tanstack/react-query"
import { productCategoriesApiResponse } from "@/lib/data/products/product-category"

type usePIInfiniteProductCategoryListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
    parent_id?: string
  }
}

const usePIInfiniteProductCategoryList = (props?: usePIInfiniteProductCategoryListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPIInfiniteProductCategoryListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = productCategoriesApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite product category list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "pi-infinite-product-category-list",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.parent_id,
    ],
    queryFn: getPIInfiniteProductCategoryListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteProductCategoryList
