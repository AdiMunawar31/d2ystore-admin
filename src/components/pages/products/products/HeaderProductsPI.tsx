"use client"

import { useMemo, useState } from "react"
import { LayoutGrid, Menu } from "lucide-react"
import Link from "next/link"
// import { toast } from "sonner"
import { useDebounceValue } from "usehooks-ts"
import usePIInfiniteProductCategoryList from "@/api/products/product-category/usePIInfiniteProductCategoryList"
import usePIInfiniteProductTypeList from "@/api/products/product-type/usePIInfiniteProductTypeList"
import CustomHeader from "@/components/custom/Header"
import { Button } from "@/components/ui/button"
import type { SelectType } from "@/lib/types/select"
import { useProductsPIContext } from "@/providers/products/products/ProductsPIProvider"

const HeaderProductsPI = (props: any) => {
  // const queryClient = useQueryClient()

  const {
    metaListProducts,
    setPageListProducts,
    selectedProducts,
    layout,
    setLayout,
    searchProducts,
    setSearchProducts,
    filterProducts,
    setFilterProducts,
  } = useProductsPIContext()

  const [searchFilter, setSearchFilter] = useState({
    productType: "",
    productCategory: "",
  })
  const [debounceSearchFilter] = useDebounceValue(searchFilter, 500)

  const {
    data: dataProductType,
    fetchNextPage: fetchNextPageProductType,
    hasNextPage: hasNextPageProductType,
    isLoading: isLoadingProductType,
    isFetchingNextPage: isFetchingNextPageProductType,
  } = usePIInfiniteProductTypeList({
    params: {
      keyword: debounceSearchFilter.productType,
    },
  })

  const {
    data: dataProductCategory,
    fetchNextPage: fetchNextPageProductCategory,
    hasNextPage: hasNextPageProductCategory,
    isLoading: isLoadingProductCategory,
    isFetchingNextPage: isFetchingNextPageProductCategory,
  } = usePIInfiniteProductCategoryList({
    params: {
      keyword: debounceSearchFilter.productCategory,
    },
  })

  const listDataFilter = useMemo(() => {
    return {
      productType: {
        selected: filterProducts.productType.map((item) => ({
          label: item.name,
          value: item.id,
        })),
        list:
          dataProductType?.pages.flat().map((item) => ({
            label: item.name,
            value: item.id,
          })) || [],
        rawList: dataProductType?.pages.flat() || [],
      },
      productCategory: {
        selected: filterProducts.productCategory.map((item) => ({
          label: item.name,
          value: item.id,
        })),
        list:
          dataProductCategory?.pages.flat().map((item) => ({
            label: item.name,
            value: item.id,
          })) || [],
        rawList: dataProductCategory?.pages.flat() || [],
      },
    }
  }, [dataProductType, dataProductCategory, filterProducts])

  return (
    <CustomHeader
      withListActions
      title={"Products"}
      startContent={
        <div className="flex flex-row items-center gap-2">
          <Button
            variant={layout === "table" ? "outline-primary" : "default"}
            size="icon"
            onClick={() => setLayout("table")}
          >
            <Menu size={20} />
          </Button>

          <Button
            variant={layout !== "grid" ? "default" : "outline-primary"}
            size="icon"
            onClick={() => setLayout("grid")}
          >
            <LayoutGrid size={20} />
          </Button>
        </div>
      }
      search={searchProducts}
      setSearch={setSearchProducts}
      selectedData={selectedProducts}
      metaApi={metaListProducts}
      isLoadingConfirmDelete={false}
      onPageMetaApiChange={setPageListProducts}
      onConfirmDelete={async () => {}}
      listActions={[
        {
          label: <Link href={"/products/products/add"}>Add New</Link>,
          variant: "primary",
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
      listActionsSelected={[
        {
          label: "More",
          variant: "outline-primary",
          type: "dropdown",
          options: [
            {
              label: "Duplicate",
            },
            {
              label: "Print",
            },
          ],
        },
      ]}
      hideDelete={props.hideDelete}
      onSubmitFilter={(value) => {
        const selectedFilterProductType = value.find((item) => item.title === "Product Type")?.selected as SelectType[]
        const selectedFilterProductCategory = value.find((item) => item.title === "Product Category")
          ?.selected as SelectType[]

        const selectedProductType = listDataFilter.productType.rawList.filter((item) => {
          return selectedFilterProductType.map((item) => item.value).includes(item.id)
        })
        const selectedProductCategory = listDataFilter.productCategory.rawList.filter((item) => {
          return selectedFilterProductCategory.map((item) => item.value).includes(item.id)
        })

        setFilterProducts({
          productType: selectedProductType,
          productCategory: selectedProductCategory,
        })
      }}
      onClearFilter={() => {
        setFilterProducts({
          productType: [],
          productCategory: [],
        })
      }}
      onDeleteFilterByTitle={(title) => {
        if (title === "Product Type") {
          setFilterProducts((prev) => ({
            ...prev,
            productType: [],
          }))
        }

        if (title === "Product Category") {
          setFilterProducts((prev) => ({
            ...prev,
            productCategory: [],
          }))
        }
      }}
      filters={[
        {
          title: "Product Type",
          type: "checkbox",
          selected: listDataFilter.productType.selected,
          list: listDataFilter.productType.list,
          isHasMoreNextPage: hasNextPageProductType,
          onFetchNextPage: fetchNextPageProductType,
          isLoadingData: isLoadingProductType || isFetchingNextPageProductType,
          search: searchFilter.productType,
          onSearchChange(value) {
            setSearchFilter((prev) => ({
              ...prev,
              productType: value,
            }))
          },
        },
        {
          title: "Product Category",
          type: "checkbox",
          selected: listDataFilter.productCategory.selected,
          list: listDataFilter.productCategory.list,
          isHasMoreNextPage: hasNextPageProductCategory,
          onFetchNextPage: fetchNextPageProductCategory,
          isLoadingData: isLoadingProductCategory || isFetchingNextPageProductCategory,
          search: searchFilter.productCategory,
          onSearchChange(value) {
            setSearchFilter((prev) => ({
              ...prev,
              productCategory: value,
            }))
          },
        },
      ]}
    />
  )
}

export default HeaderProductsPI
