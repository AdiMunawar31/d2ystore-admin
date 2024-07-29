// import { useInfiniteQuery } from "@tanstack/react-query"
// import { apiApp } from "@/api/apiApp"
// import type { ApiResponseInterface } from "@/lib/interfaces/api"
// import type { CountryInterface } from "@/lib/interfaces/ework/country"

// type useInfiniteCountryListProps = {
//   params?: {
//     limit?: number
//     keyword?: string
//   }
// }

// const useInfiniteCountryList = (props?: useInfiniteCountryListProps) => {
//   const getInfiniteCountryListFn = async ({ pageParam }: { pageParam: number }) => {
//     try {
//       const response = await apiApp.get<ApiResponseInterface<CountryInterface[]>>(`/zeus/v1/country`, {
//         params: {
//           limit: props?.params?.limit || 10,
//           page: pageParam,
//           ...(props?.params?.keyword && { name: props?.params.keyword }),
//         },
//       })

//       return response.data.data || []
//     } catch (error) {
//       console.error(error)
//       throw new Error("error fetch infinite country list")
//     }
//   }

//   const infiniteQuery = useInfiniteQuery({
//     queryKey: ["infinite-country-list", props?.params?.limit, props?.params?.keyword],
//     queryFn: getInfiniteCountryListFn,
//     getNextPageParam(lastPage, allPages) {
//       return lastPage?.length >= 0 ? allPages.length + 1 : undefined
//     },
//     initialPageParam: 1,
//   })

//   return { ...infiniteQuery }
// }
// export default useInfiniteCountryList
