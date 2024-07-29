import { useInfiniteQuery } from "@tanstack/react-query"
import { temperatureConditionsApiResponse } from "@/lib/data/products/temperature-condition"

type usePIInfiniteTemperatureConditionListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const usePIInfiniteTemperatureConditionList = (props?: usePIInfiniteTemperatureConditionListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPIInfiniteTemperatureConditionListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = temperatureConditionsApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi infinite temperature condition list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "pi-infinite-temperature-condition-list",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
    ],
    queryFn: getPIInfiniteTemperatureConditionListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default usePIInfiniteTemperatureConditionList
