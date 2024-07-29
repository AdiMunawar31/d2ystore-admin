/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDebounceValue } from "usehooks-ts"
import * as z from "zod"
import useInfiniteListCOA from "@/api/products/chart-of-account/useInfiniteListCOA"
import usePIInfiniteCostingMethodList from "@/api/products/costing-method/usePIInfiniteCostingMethodList"
import usePIInfiniteInventoryValuationList from "@/api/products/inventory-valuation/usePIInfiniteInventoryValuationList"
import usePIInfiniteProductCategoryList from "@/api/products/product-category/usePIInfiniteProductCategoryList"
// import useInfiniteListCOA from "@/api/accounting/account-management/chart-of-account/useInfiniteListCOA"
// import usePIInfiniteCostingMethodList from "@/api/inventory/product/costing-method/usePIInfiniteCostingMethodList"
// import usePIInfiniteInventoryValuationList from "@/api/inventory/product/inventory-valuation/usePIInfiniteInventoryValuationList"
// import usePIInfiniteProductCategoryList from "@/api/inventory/product/product-category/usePIInfiniteProductCategoryList"
import FormDialog from "@/components/custom/dialog/FormDialog"
import type {
  FormProductCategoryPIInterface,
  ProductCategoryPIInterface,
} from "@/lib/interfaces/products/product/product-category"

const formPCSchema: z.ZodType<FormProductCategoryPIInterface> = z.object({
  name: z.string().min(1, "Name is required"),
  parent: z.object({ id: z.string(), name: z.string() }).optional(),
  costingMethod: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .refine(
      (val) => {
        return !!val.id || !!val.name
      },
      {
        message: "Costing Method is required",
      }
    ),
  inventoryValuation: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .refine(
      (val) => {
        return !!val.id || !!val.name
      },
      {
        message: "Inventory Valuation is required",
      }
    ),
  // incomeAccount: z
  //   .object({
  //     id: z.string(),
  //     name: z.string(),
  //   })
  //   .refine(
  //     (val) => {
  //       return !!val.id || !!val.name
  //     },
  //     {
  //       message: "Income Account is required",
  //     }
  //   ),
  // expenseAccount: z
  //   .object({
  //     id: z.string(),
  //     name: z.string(),
  //   })
  //   .refine(
  //     (val) => {
  //       return !!val.id || !!val.name
  //     },
  //     {
  //       message: "Expense Account is required",
  //     }
  //   ),
  // colorPOS: z.string().min(1, "Color POS is required"),
  // showImagePOS: z.enum(["yes", "no"]),
})

type formPCSchemaType = z.infer<typeof formPCSchema>

type FormProductCategoryPIProps = {
  data?: Partial<ProductCategoryPIInterface>
  removeTrigger?: boolean
  open?: boolean
  onOpenChange?(open: boolean): void
  onSuccessSubmit?(data: ProductCategoryPIInterface): void
}

const FormProductCategoryPI = ({
  data,
  removeTrigger,
  open,
  onOpenChange,
  // onSuccessSubmit,
}: FormProductCategoryPIProps) => {
  // const queryClient = useQueryClient()

  const form = useForm<formPCSchemaType>({
    resolver: zodResolver(formPCSchema),
    defaultValues: {
      name: "",
      costingMethod: {
        id: "",
        name: "",
      },
      inventoryValuation: {
        id: "",
        name: "",
      },
      // incomeAccount: {
      //   id: "",
      //   name: "",
      // },
      // expenseAccount: {
      //   id: "",
      //   name: "",
      // },
      // colorPOS: "",
      // showImagePOS: "yes",
    },
  })

  useEffect(() => {
    if (!data) return

    form.reset({
      name: data.name,
      ...(data.parent ? { parent: { id: data.parent?.id, name: data.parent?.name } } : {}),
      costingMethod: {
        id: data.valuation?.costing_method.id,
        name: data.valuation?.costing_method.name,
      },
      inventoryValuation: {
        id: data.valuation?.inventory_valuation.id,
        name: data.valuation?.inventory_valuation.name,
      },
      // incomeAccount: {
      //   id: data.account?.income.id,
      //   name: data.account?.income.name,
      // },
      // expenseAccount: {
      //   id: data.account?.expense.id,
      //   name: data.account?.expense.name,
      // },
      // colorPOS: data.pos?.card_color,
      // showImagePOS: data.pos?.show_image ? "yes" : "no",
    })
  }, [form, data])

  // const { mutateAsync: mutateEdit, isPending: isPendingEdit } = usePIEditProductCategory({
  //   onSuccess(data) {
  //     queryClient.invalidateQueries({ queryKey: ["pi-product-category-list"] })
  //     queryClient.invalidateQueries({ queryKey: ["pi-infinite-product-category-list"] })
  //     toast.success("Success edit product category")
  //     if (onSuccessSubmit) onSuccessSubmit(data)
  //   },
  //   onError() {
  //     toast.error("Failed edit product category")
  //   },
  // })

  // const { mutateAsync: mutateAdd, isPending: isPendingAdd } = usePICreateProductCategory({
  //   onSuccess(data) {
  //     queryClient.invalidateQueries({ queryKey: ["pi-product-category-list"] })
  //     queryClient.invalidateQueries({ queryKey: ["pi-infinite-product-category-list"] })
  //     toast.success(`Success add product category`)
  //     if (onSuccessSubmit) onSuccessSubmit(data)
  //   },
  //   onError(err) {
  //     if (err?.message === "duplicate key error: company.id, product_category.name") {
  //       toast.error(`Category Product already exist`)
  //     } else {
  //       toast.error(`Failed add product category`)
  //     }
  //   },
  // })

  const [search, setSearch] = useState({
    parent: "",
    costingMethod: "",
    inventoryValuation: "",
    incomeAccount: "",
    expenseAccount: "",
  })

  const [debounceSearch] = useDebounceValue(search, 500)

  const {
    data: dataParents,
    fetchNextPage: fetchNextPageParents,
    hasNextPage: hasNextPageParents,
    isLoading: isLoadingParents,
    isFetchingNextPage: isFetchingNextPageParents,
  } = usePIInfiniteProductCategoryList({
    params: {
      keyword: debounceSearch.parent,
    },
  })

  // const { mutateAsync: mutateCreateCostingMethod, isPending: isPendingCreateCostingMethod } = usePICreateCostingMethod({
  //   onError: () => {
  //     toast.error("Error create costing method")
  //   },
  // })

  const {
    data: dataCostingMethods,
    fetchNextPage: fetchNextPageCostingMethods,
    hasNextPage: hasNextPageCostingMethods,
    isLoading: isLoadingCostingMethods,
    isFetchingNextPage: isFetchingNextPageCostingMethods,
  } = usePIInfiniteCostingMethodList({
    params: {
      keyword: debounceSearch.costingMethod,
    },
  })

  // const { mutateAsync: mutateCreateInventoryValuation, isPending: isPendingCreateInventoryValuation } =
  //   usePICreateInventoryValuation({
  //     onError: () => {
  //       toast.error("Error create inventory valuation")
  //     },
  //   })

  const {
    data: dataInventoryValuations,
    fetchNextPage: fetchNextPageInventoryValuations,
    hasNextPage: hasNextPageInventoryValuations,
    isLoading: isLoadingInventoryValuations,
    isFetchingNextPage: isFetchingNextPageInventoryValuations,
  } = usePIInfiniteInventoryValuationList({
    params: {
      keyword: debounceSearch.inventoryValuation,
    },
  })

  const { data: dataIncomeAccounts } = useInfiniteListCOA({
    params: {
      keyword: debounceSearch.incomeAccount,
      account_type_number: 4,
    },
  })

  const { data: dataExpenseAccounts } = useInfiniteListCOA({
    params: {
      keyword: debounceSearch.expenseAccount,
      account_type_number: 5,
    },
  })

  const listDataCombobox = useMemo(() => {
    return {
      parents:
        dataParents?.pages
          .flat()
          .map((item) => ({
            label: item.name,
            value: item.id,
          }))
          .filter((item) => item.value !== data?.id) || [],
      costingMethods:
        dataCostingMethods?.pages.flat().map((item) => ({
          label: item.name,
          value: item.id,
        })) || [],
      inventoryValuations:
        dataInventoryValuations?.pages.flat().map((item) => ({
          label: item.name,
          value: item.id,
        })) || [],
      incomeAccounts:
        dataIncomeAccounts?.pages.flat().map((item) => ({
          label: item.name,
          value: item.id,
        })) || [],
      expenseAccounts:
        dataExpenseAccounts?.pages.flat().map((item) => ({
          label: item.name,
          value: item.id,
        })) || [],
    }
  }, [data, dataParents, dataCostingMethods, dataInventoryValuations, dataIncomeAccounts, dataExpenseAccounts])

  const handleSubmit = async (values: formPCSchemaType) => {
    const payload = {
      // account: {
      //   income: {
      //     id: values.incomeAccount.id,
      //   },
      //   expense: {
      //     id: values.expenseAccount.id,
      //   },
      // },
      name: values.name,
      parent: values.parent ? { id: values.parent.id } : undefined,
      // pos: {
      //   card_color: values.colorPOS,
      //   show_image: values.showImagePOS === "yes",
      // },
      valuation: {
        costing_method: {
          id: values.costingMethod.id,
        },
        inventory_valuation: {
          id: values.inventoryValuation.id,
        },
      },
    }

    // if (data && data.id && data.status) {
    //   await mutateEdit({
    //     id: data.id,
    //     body: {
    //       ...payload,
    //       status: data.status,
    //     },
    //   })
    // } else {
    //   await mutateAdd({
    //     body: payload,
    //   })
    // }
  }

  return (
    <FormDialog
      form={form}
      open={open}
      onOpenChange={onOpenChange}
      title={`${data?.id ? "Detail" : "Add"} Product Category`}
      textTrigger={data?.id ? "View Detail" : "Add New"}
      variantTrigger={data?.id ? "ghost-primary" : "primary"}
      removeTrigger={removeTrigger}
      onSubmit={handleSubmit}
      isLoadingSubmit={false}
      textSubmit={data?.id ? "Save Changes" : "Submit"}
      listForms={[
        {
          title: "General Information",
          fields: [
            {
              type: "input",
              name: "name",
              label: "Name",
              required: true,
              placeholder: "Input Category Name",
            },
            {
              type: "combobox",
              name: "parent",
              label: "Parent",
              placeholder: "Choose Parent",
              required: false,
              data: listDataCombobox.parents,
              isHasMoreNextPage: hasNextPageParents,
              onFetchNextPage: fetchNextPageParents,
              isLoadingData: isLoadingParents || isFetchingNextPageParents,
              search: search.parent,
              onSearchChange: (value) => {
                setSearch((prev) => ({
                  ...prev,
                  parent: value,
                }))
              },
            },
          ],
        },
        {
          title: "Valuation",
          fields: [
            {
              type: "combobox",
              name: "costingMethod",
              label: "Costing Method",
              placeholder: "Choose Costing Method",
              required: true,
              data: listDataCombobox.costingMethods,
              isHasMoreNextPage: hasNextPageCostingMethods,
              onFetchNextPage: fetchNextPageCostingMethods,
              isLoadingData: isLoadingCostingMethods || isFetchingNextPageCostingMethods,
              isLoadingValue: false,
              search: search.costingMethod,
              onSearchChange: (value) => {
                setSearch((prev) => ({
                  ...prev,
                  costingMethod: value,
                }))
              },
              // mutateSelectCreate: async (value) => {
              //   const res = await mutateCreateCostingMethod({
              //     body: {
              //       name: value,
              //     },
              //   })

              //   return res
              // },
            },
            {
              type: "combobox",
              name: "inventoryValuation",
              label: "Inventory Valuation",
              placeholder: "Choose Inventory Valuation",
              required: true,
              data: listDataCombobox.inventoryValuations,
              isHasMoreNextPage: hasNextPageInventoryValuations,
              onFetchNextPage: fetchNextPageInventoryValuations,
              isLoadingData: isLoadingInventoryValuations || isFetchingNextPageInventoryValuations,
              isLoadingValue: false,
              search: search.inventoryValuation,
              onSearchChange: (value) => {
                setSearch((prev) => ({
                  ...prev,
                  inventoryValuation: value,
                }))
              },
              // mutateSelectCreate: async (value) => {
              //   const res = await mutateCreateInventoryValuation({
              //     body: {
              //       name: value,
              //     },
              //   })

              //   return res
              // },
            },
          ],
        },
        // {
        //   title: "Account Properties",
        //   fields: [
        //     {
        //       type: "combobox",
        //       name: "incomeAccount",
        //       label: "Income Account",
        //       placeholder: "Choose Income Account",
        //       required: true,
        //       data: listDataCombobox.incomeAccounts,
        //       isHasMoreNextPage: hasNextPageIncomeAccounts,
        //       onFetchNextPage: fetchNextPageIncomeAccounts,
        //       isLoadingData: isLoadingIncomeAccounts || isFetchingNextPageIncomeAccounts,
        //       search: search.incomeAccount,
        //       onSearchChange: (value) => {
        //         setSearch((prev) => ({
        //           ...prev,
        //           incomeAccount: value,
        //         }))
        //       },
        //     },
        //     {
        //       type: "combobox",
        //       name: "expenseAccount",
        //       label: "Expense Account",
        //       placeholder: "Choose Expense Account",
        //       required: true,
        //       data: listDataCombobox.expenseAccounts,
        //       isHasMoreNextPage: hasNextPageExpenseAccounts,
        //       onFetchNextPage: fetchNextPageExpenseAccounts,
        //       isLoadingData: isLoadingExpenseAccounts || isFetchingNextPageExpenseAccounts,
        //       search: search.expenseAccount,
        //       onSearchChange: (value) => {
        //         setSearch((prev) => ({
        //           ...prev,
        //           expenseAccount: value,
        //         }))
        //       },
        //     },
        //   ],
        // },
        // {
        //   title: "POS",
        //   fields: [
        //     {
        //       type: "color-picker",
        //       name: "colorPOS",
        //       label: "Color Display on POS",
        //       required: true,
        //     },
        //     {
        //       type: "radio-group",
        //       name: "showImagePOS",
        //       label: "Show Image on POS",
        //       options: [
        //         {
        //           label: "Yes",
        //           value: "yes",
        //         },
        //         {
        //           label: "No",
        //           value: "no",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ]}
    />
  )
}

export default FormProductCategoryPI
