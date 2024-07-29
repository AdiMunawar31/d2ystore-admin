import { useInfiniteQuery } from "@tanstack/react-query"
import { taxesApiResponse } from "@/lib/data/journal/taxes"

type useInfiniteListTaxesProps = {
  params?: {
    limit?: number
    keyword?: string
    type?: string
  }
}

const useInfiniteListTaxes = (props?: useInfiniteListTaxesProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getListTaxesFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = taxesApiResponse

      return response.data || []
    } catch (error) {
      throw new Error("error fetch list taxes")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["list-taxes", props?.params?.limit, props?.params?.keyword, props?.params?.type],
    queryFn: getListTaxesFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}

export default useInfiniteListTaxes
