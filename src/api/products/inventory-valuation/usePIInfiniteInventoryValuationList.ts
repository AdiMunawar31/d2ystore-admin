import { useInfiniteQuery } from "@tanstack/react-query"
import { inventoryValuationApiResponse } from "@/lib/data/products/inventory-valuation"

type usePIInfiniteInventoryValuationListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const usePIInfiniteInventoryValuationList = (props?: usePIInfiniteInventoryValuationListProps) => {
  const getPIInfiniteInventoryValuationListFn = async () => {
    try {
      const response = inventoryValuationApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite inventory valuation list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "pi-infinite-inventory-valuation-list",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
    ],
    queryFn: getPIInfiniteInventoryValuationListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteInventoryValuationList
