import { useInfiniteQuery } from "@tanstack/react-query"
import { chartOfAccountsApiResponse } from "@/lib/data/products/chart-of-account"

type useInfiniteListCOAProps = {
  params?: {
    limit?: number
    keyword?: string
    account_type_number?: number
  }
}

const useInfiniteListCOA = (props?: useInfiniteListCOAProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getListCOAFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = chartOfAccountsApiResponse

      return response.data || []
    } catch (error) {
      throw new Error("error fetch list COA")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["list-coa", props?.params?.limit, props?.params?.keyword, props?.params?.account_type_number],
    queryFn: getListCOAFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}

export default useInfiniteListCOA
