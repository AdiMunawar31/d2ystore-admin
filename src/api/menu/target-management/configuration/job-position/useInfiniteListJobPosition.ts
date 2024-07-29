import { useInfiniteQuery } from "@tanstack/react-query"
import { jobPositionsApiResponse } from "@/lib/data/configuration/job-position"

type useInfiniteListJobPositionProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
    parent_id?: string[]
    department_ids?: string
    status?: string
  }
}

const useInfiniteListJobPositions = (props?: useInfiniteListJobPositionProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteListJobPositionFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = jobPositionsApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error infinite list job position")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "infinite-list-job-position",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.parent_id,
      props?.params?.department_ids,
      props?.params?.status,
    ],
    queryFn: getInfiniteListJobPositionFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteListJobPositions
