import { useInfiniteQuery } from "@tanstack/react-query"
import { productBrandApiResponse } from "@/lib/data/products/product-brand"

type useInfiniteListProductBrandProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
    parent_id?: string[]
  }
}

const useInfiniteListProductBrand = (props?: useInfiniteListProductBrandProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteListProductBrandFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = productBrandApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite list product brand")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "infinite-list-product-brand",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.parent_id,
    ],
    queryFn: getInfiniteListProductBrandFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteListProductBrand
