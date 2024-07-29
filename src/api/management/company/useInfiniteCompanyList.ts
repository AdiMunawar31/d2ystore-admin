import { useInfiniteQuery } from "@tanstack/react-query"
import { companyApiResponse } from "@/lib/data/company"

type useInfiniteCompanyListProps = {
  params?: {
    limit?: number
    keyword?: string
  }
}

const useInfiniteCompanyList = (props?: useInfiniteCompanyListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteCompanyListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = companyApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite Company list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-company-list", props?.params?.limit, props?.params?.keyword],
    queryFn: getInfiniteCompanyListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteCompanyList
