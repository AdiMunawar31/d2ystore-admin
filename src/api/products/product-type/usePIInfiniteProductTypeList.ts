import { useInfiniteQuery } from "@tanstack/react-query"
import { productTypesApiResponse } from "@/lib/data/products/product-type"

type usePIInfiniteProductTypeListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const usePIInfiniteProductTypeList = (props?: usePIInfiniteProductTypeListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPIInfiniteProductTypeListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = productTypesApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite product type list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["pi-infinite-product-type-list", props?.params?.limit, props?.params?.keyword, props?.params?.ids],
    queryFn: getPIInfiniteProductTypeListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteProductTypeList
