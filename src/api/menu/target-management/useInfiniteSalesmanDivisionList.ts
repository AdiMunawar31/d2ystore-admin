import { useInfiniteQuery } from "@tanstack/react-query"
import { jobPositionsApiResponse } from "@/lib/data/configuration/job-position"

type useInfiniteListProps = {
  params?: {
    limit?: number
    keyword?: string
  }
}

const useInfinitSalesmanDivisionList = (props?: useInfiniteListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfinitSalesmanDivisionListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = jobPositionsApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error infinite salesman division list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-salesman-division-list", props?.params?.limit, props?.params?.keyword],
    queryFn: getInfinitSalesmanDivisionListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfinitSalesmanDivisionList
