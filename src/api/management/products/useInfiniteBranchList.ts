import { useInfiniteQuery } from "@tanstack/react-query"
import { branchesApiResponse } from "@/lib/data/target-management"

type useInfiniteBranchListProps = {
  params?: {
    limit?: number
    name?: string
    status?: string
    withall?: boolean
  }
}

const useInfiniteBranchList = (props?: useInfiniteBranchListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteBranchListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = branchesApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite branch list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-branch-list", props?.params?.limit, props?.params?.name, props?.params?.status],
    queryFn: getInfiniteBranchListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteBranchList
