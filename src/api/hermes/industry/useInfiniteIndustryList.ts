import { useInfiniteQuery } from "@tanstack/react-query"
import { industryApiResponse } from "@/lib/data/hermes/industry"

type useInfiniteIndustryListProps = {
  params?: {
    limit?: number
    keyword?: string
  }
}

const useInfiniteIndustryList = (props?: useInfiniteIndustryListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteIndustryListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = industryApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite industry list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-industry-list", props?.params?.limit, props?.params?.keyword],
    queryFn: getInfiniteIndustryListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteIndustryList
