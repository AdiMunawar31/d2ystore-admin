import { useInfiniteQuery } from "@tanstack/react-query"
import { costingMethodApiResponse } from "@/lib/data/products/costing-method"

type usePIInfiniteCostingMethodListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const usePIInfiniteCostingMethodList = (props?: usePIInfiniteCostingMethodListProps) => {
  const getPIInfiniteCostingMethodListFn = async () => {
    try {
      const response = costingMethodApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite costing method list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["pi-infinite-costing-method-list", props?.params?.limit, props?.params?.keyword, props?.params?.ids],
    queryFn: getPIInfiniteCostingMethodListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteCostingMethodList
