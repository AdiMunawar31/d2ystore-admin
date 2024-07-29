import { useInfiniteQuery } from "@tanstack/react-query"
import { employeesApiResponse } from "@/lib/data/employee"

type useInfiniteListEmployeeProps = {
  params?: {
    limit?: number
    keyword?: string
    job_position_ids?: string
  }
}

const useInfiniteListEmployee = (props?: useInfiniteListEmployeeProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteListEmployeeFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = employeesApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite list employee")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-employee-list", props?.params?.limit, props?.params?.keyword, props?.params?.job_position_ids],
    queryFn: getInfiniteListEmployeeFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    enabled: props?.params?.job_position_ids?.length !== 0,
  })

  return { ...infiniteQuery }
}
export default useInfiniteListEmployee
