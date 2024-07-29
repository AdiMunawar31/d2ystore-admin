import { useInfiniteQuery } from "@tanstack/react-query"
import { uomCategoriesApiResponse } from "@/lib/data/products/uom-category"

type useInfiniteUomCategoryListProps = {
  params?: {
    limit?: number
    keyword?: string
  }
}

const useInfiniteUomCategoryList = (props?: useInfiniteUomCategoryListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteUomCategoryListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = uomCategoriesApiResponse

      return response.data || []
    } catch (error) {
      throw new Error("error fetch infinite uom category list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-uom-category-list", props?.params?.limit, props?.params?.keyword],
    queryFn: getInfiniteUomCategoryListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteUomCategoryList
