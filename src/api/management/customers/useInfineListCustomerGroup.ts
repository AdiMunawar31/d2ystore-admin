import { useInfiniteQuery } from "@tanstack/react-query"
import { customerGroupApiResponse } from "@/lib/data/customer-group"

type useInfiniteListCustomerGroupProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
    parent_id?: string[]
  }
}

const useInfiniteListCustomerGroup = (props?: useInfiniteListCustomerGroupProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteListCustomerGroupFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = customerGroupApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error infinite list customer group")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "infinite-list-customer-group",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.parent_id,
    ],
    queryFn: getInfiniteListCustomerGroupFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteListCustomerGroup
