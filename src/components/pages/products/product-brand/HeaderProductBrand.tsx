"use client"

import CustomHeader from "@/components/custom/Header"
import { useProductBrandContext } from "@/providers/products/product-brand/ProductBrandProvider"
import FormProductBrand from "./FormProductBrand"

const HeaderProductBrand = () => {
  // const queryClient = useQueryClient()
  const {
    metaListProductBrand,
    setPageListProductBrand,
    selectedProductBrand,
    // setSelectedProductBrand,
    searchProductBrand,
    setSearchProductBrand,
  } = useProductBrandContext()

  // const { mutateAsync, isPending } = useBatchDeleteProductBrand({
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["product-brand-list"] })
  //     toast.success("Success delete product brand")
  //     setSelectedProductBrand([])
  //   },
  //   onError: () => {
  //     toast.error("Error delete product brand")
  //   },
  // })

  return (
    <CustomHeader
      withListActions
      title={"Product Brand"}
      search={searchProductBrand}
      setSearch={setSearchProductBrand}
      selectedData={selectedProductBrand}
      metaApi={metaListProductBrand}
      isLoadingConfirmDelete={false}
      onPageMetaApiChange={setPageListProductBrand}
      onConfirmDelete={async () => {}}
      listActions={[
        {
          label: <FormProductBrand />,
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

export default HeaderProductBrand
