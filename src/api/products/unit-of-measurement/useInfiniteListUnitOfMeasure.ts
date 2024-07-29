import { useInfiniteQuery } from "@tanstack/react-query"
import { unitOfMeasuresApiResponse } from "@/lib/data/products/unit-of-measure"

type useInfiniteListUnitOfMeasureProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
    category_ids?: string[]
    format_numbering_types?: string[]
    codes?: string[]
  }
}

const useInfiniteListUnitOfMeasure = (props?: useInfiniteListUnitOfMeasureProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteListUnitOfMeasureFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = unitOfMeasuresApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite list unit of measure")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: [
      "infinite-list-unit-of-measure",
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.ids,
      props?.params?.category_ids,
      props?.params?.format_numbering_types,
      props?.params?.codes,
    ],
    queryFn: getInfiniteListUnitOfMeasureFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteListUnitOfMeasure
