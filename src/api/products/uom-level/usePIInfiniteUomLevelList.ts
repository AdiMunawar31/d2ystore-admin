import { useInfiniteQuery } from "@tanstack/react-query"
import { uomLevelsApiResponse } from "@/lib/data/products/uom-level"

type usePIInfiniteUomLevelListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const usePIInfiniteUomLevelList = (props?: usePIInfiniteUomLevelListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPIInfiniteUomLevelListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = uomLevelsApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite uom level list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["pi-infinite-uom-level-list", props?.params?.limit, props?.params?.keyword, props?.params?.ids],
    queryFn: getPIInfiniteUomLevelListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteUomLevelList
