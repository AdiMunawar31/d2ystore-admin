import { useInfiniteQuery } from "@tanstack/react-query"
import { languageApiResponse } from "@/lib/data/languages"

type useInfiniteLanguageListProps = {
  params?: {
    limit?: number
    keyword?: string
    ids?: string[]
  }
}

const useInfiniteLanguageList = (props?: useInfiniteLanguageListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getInfiniteLanguageListFn = async ({ pageParam }: { pageParam: number }) => {
    try {
      const response = languageApiResponse

      return response.data || []
    } catch (error) {
      console.error(error)
      throw new Error("error fetch infinite language list")
    }
  }

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["infinite-language-list", props?.params?.limit, props?.params?.keyword, props?.params?.ids],
    queryFn: getInfiniteLanguageListFn,
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length >= 0 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })

  return { ...infiniteQuery }
}
export default useInfiniteLanguageList
