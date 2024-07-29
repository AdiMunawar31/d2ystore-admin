import { useInfiniteQuery } from "@tanstack/react-query"
import { departmentApiResponse } from "@/lib/data/zeus/department"

type useInfiniteListDepartmentsProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
    parent_id?: string[]
  }
}

const useInfiniteListDepartments = (props?: useInfiniteListDepartmentsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteListDepartmentsFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = departmentApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error infinite list departments")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "infinite-list-departments",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.parent_id,
    ],
    queryFn: getInfiniteListDepartmentsFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteListDepartments
