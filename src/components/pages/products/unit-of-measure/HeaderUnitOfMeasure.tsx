// "use client"

// import { useMemo, useState } from "react"
// import { useQueryClient } from "@tanstack/react-query"
// import { toast } from "sonner"
// import { useDebounceValue } from "usehooks-ts"
// import useBatchDeleteUnitOfMeasure from "@/api/inventory/product/unit-of-measure/useBatchDeleteUnitOfMeasure"
// import useInfiniteUomCategoryList from "@/api/inventory/product/uom-category/useInfiniteListUomCategory"
// import CustomHeader from "@/components/custom/Header"
// import type { UnitOfMeasureInterface } from "@/lib/interfaces/inventory/product/unit-of-measure"
// import type { SelectType } from "@/lib/types/select"
// import { useUnitOfMeasureContext } from "@/providers/inventory/product/unit-of-measure/UnitOfMeasureProvider"
// import FormUnitOfMeasure from "./FormUnitOfMeasure"

// const dataFormatTypes: {
//   label: string
//   value: UnitOfMeasureInterface["format"]
// }[] = [
//   {
//     label: "Smaller Than Reference",
//     value: "smaller",
//   },
//   {
//     label: "Bigger Than Reference",
//     value: "bigger",
//   },
//   {
//     label: "Reference",
//     value: "reference",
//   },
// ]

// const HeaderUnitOfMeasure = () => {
//   const queryClient = useQueryClient()
//   const {
//     metaListUnitOfMeasure,
//     setPageListUnitOfMeasure,
//     selectedUnitOfMeasure,
//     setSelectedUnitOfMeasure,
//     searchUnitOfMeasure,
//     setSearchUnitOfMeasure,
//     filterUnitOfMeasure,
//     setFilterUnitOfMeasure,
//   } = useUnitOfMeasureContext()

//   const { mutateAsync, isPending } = useBatchDeleteUnitOfMeasure({
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["unit-of-measure-list"] })
//       toast.success("Success delete unit of measure")
//       setSelectedUnitOfMeasure([])
//     },
//     onError: () => {
//       toast.error("Error delete unit of measure")
//     },
//   })

//   const [searchFilter, setSearchFilter] = useState({
//     uomCategory: "",
//   })
//   const [debounceSearchFilter] = useDebounceValue(searchFilter, 500)

//   const {
//     data: dataUomCategory,
//     fetchNextPage: fetchNextPageUomCategory,
//     hasNextPage: hasNextPageUomCategory,
//     isLoading: isLoadingUomCategory,
//     isFetchingNextPage: isFetchingNextPageUomCategory,
//   } = useInfiniteUomCategoryList({
//     params: {
//       keyword: debounceSearchFilter.uomCategory,
//     },
//   })

//   const listDataFilter = useMemo(() => {
//     return {
//       type: {
//         selected: filterUnitOfMeasure.type.map((item) => ({
//           label: item.value,
//           value: item.value,
//         })),
//         list: dataFormatTypes,
//         rawList: dataFormatTypes,
//       },
//       uomCategory: {
//         selected: filterUnitOfMeasure.uomCategory.map((item) => ({
//           label: item.name,
//           value: item.id,
//         })),
//         list:
//           dataUomCategory?.pages.flat().map((item) => ({
//             label: item.name,
//             value: item.id,
//           })) || [],
//         rawList: dataUomCategory?.pages.flat() || [],
//       },
//     }
//   }, [dataUomCategory, filterUnitOfMeasure])

//   return (
//     <CustomHeader
//       withListActions
//       title={"Unit Of Measure"}
//       search={searchUnitOfMeasure}
//       setSearch={setSearchUnitOfMeasure}
//       selectedData={selectedUnitOfMeasure}
//       metaApi={metaListUnitOfMeasure}
//       isLoadingConfirmDelete={isPending}
//       onPageMetaApiChange={setPageListUnitOfMeasure}
//       onConfirmDelete={async (selectedData) => {
//         await mutateAsync({
//           params: {
//             ids: selectedData.map((item) => item.id),
//           },
//         })
//       }}
//       listActions={[
//         {
//           label: <FormUnitOfMeasure />,
//           asChild: true,
//         },
//         // {
//         //   label: <MoreVertical />,
//         //   variant: "outline-primary",
//         //   size: "icon",
//         //   type: "dropdown",
//         //   options: [
//         //     {
//         //       label: "Import Data",
//         //     },
//         //     {
//         //       label: "Download Template",
//         //     },
//         //   ],
//         // },
//       ]}
//       onSubmitFilter={(value) => {
//         const selectedFilterProductType = value.find((item) => item.title === "Type")?.selected as SelectType[]
//         const selectedFilterProductCategory = value.find((item) => item.title === "UoM Category")
//           ?.selected as SelectType[]

//         const selectedProductType = listDataFilter.type.rawList.filter((item) => {
//           return selectedFilterProductType.map((item) => item.value).includes(item.value)
//         })
//         const selectedProductCategory = listDataFilter.uomCategory.rawList.filter((item) => {
//           return selectedFilterProductCategory.map((item) => item.value).includes(item.id)
//         })

//         setFilterUnitOfMeasure({
//           type: selectedProductType,
//           uomCategory: selectedProductCategory,
//         })
//       }}
//       onClearFilter={() => {
//         setFilterUnitOfMeasure({
//           type: [],
//           uomCategory: [],
//         })
//       }}
//       onDeleteFilterByTitle={(title) => {
//         if (title === "Type") {
//           setFilterUnitOfMeasure((prev) => ({
//             ...prev,
//             type: [],
//           }))
//         }

//         if (title === "UoM Category") {
//           setFilterUnitOfMeasure((prev) => ({
//             ...prev,
//             uomCategory: [],
//           }))
//         }
//       }}
//       filters={[
//         {
//           title: "Type",
//           type: "checkbox",
//           selected: listDataFilter.type.selected,
//           list: listDataFilter.type.list,
//         },
//         {
//           title: "UoM Category",
//           type: "checkbox",
//           selected: listDataFilter.uomCategory.selected,
//           list: listDataFilter.uomCategory.list,
//           isHasMoreNextPage: hasNextPageUomCategory,
//           onFetchNextPage: fetchNextPageUomCategory,
//           isLoadingData: isLoadingUomCategory || isFetchingNextPageUomCategory,
//           search: searchFilter.uomCategory,
//           onSearchChange(value) {
//             setSearchFilter((prev) => ({
//               ...prev,
//               uomCategory: value,
//             }))
//           },
//         },
//       ]}
//     />
//   )
// }

// export default HeaderUnitOfMeasure
