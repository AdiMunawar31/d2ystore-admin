import { useInfiniteQuery } from "@tanstack/react-query"
import { storageConditionsApiResponse } from "@/lib/data/products/storage-condition"

type usePIInfiniteStorageConditionListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const usePIInfiniteStorageConditionList = (props?: usePIInfiniteStorageConditionListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPIInfiniteStorageConditionListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = storageConditionsApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite storage condition list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["pi-infinite-storage-condition-list", props?.params?.limit, props?.params?.keyword, props?.params?.ids],
    queryFn: getPIInfiniteStorageConditionListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteStorageConditionList
