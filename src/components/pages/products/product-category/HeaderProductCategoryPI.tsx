"use client"

import CustomHeader from "@/components/custom/Header"
import { useProductCategoryPIContext } from "@/providers/products/product-category/ProductCategoryPIProvider"
import FormProductCategoryPI from "./FormProductCategoryPI"

const HeaderProductCategoryPI = () => {
  // const queryClient = useQueryClient()
  const {
    metaListProductCategory,
    setPageListProductCategory,
    selectedProductCategory,
    // setSelectedProductCategory,
    searchProductCategory,
    setSearchProductCategory,
  } = useProductCategoryPIContext()

  // const { mutateAsync, isPending } = usePIBatchDeleteProductCategory({
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["pi-product-category-list"] })
  //     toast.success("Success delete product category")
  //     setSelectedProductCategory([])
  //   },
  //   onError: () => {
  //     toast.error("Error delete product category")
  //   },
  // })

  return (
    <CustomHeader
      withListActions
      title={"Product Category"}
      search={searchProductCategory}
      setSearch={setSearchProductCategory}
      selectedData={selectedProductCategory}
      metaApi={metaListProductCategory}
      isLoadingConfirmDelete={false}
      onPageMetaApiChange={setPageListProductCategory}
      onConfirmDelete={async () => {}}
      listActions={[
        {
          label: <FormProductCategoryPI />,
          asChild: true,
        },
        // {
        //   label: <MoreVertical />,
        //   variant: "outline-primary",
        //   size: "icon",
        //   type: "dropdown",
        //   options: [
        //     {
        //       label: "Import Data",
        //     },
        //     {
        //       label: "Download Template",
        //     },
        //   ],
        // },
      ]}
    />
  )
}

export default HeaderProductCategoryPI
