import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDebounceValue } from "usehooks-ts"
import * as z from "zod"
import useInfiniteListProductBrand from "@/api/products/product-brand/useInfiniteListProductBrand"
import FormDialog from "@/components/custom/dialog/FormDialog"
import type { FormProductBrandInterface, ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"

const formProductBrandSchema: z.ZodType<FormProductBrandInterface> = z.object({
  name: z.string().min(1, "Name is required"),
  parent: z.object({ id: z.string(), name: z.string() }).optional(),
})

type formProductBrandSchemaType = z.infer<typeof formProductBrandSchema>

type FormProductBrandProps = {
  data?: ProductBrandInterface
}

const FormProductBrand = ({ data }: FormProductBrandProps) => {
  // const queryClient = useQueryClient()

  const form = useForm<formProductBrandSchemaType>({
    resolver: zodResolver(formProductBrandSchema),
    defaultValues: {
      name: "",
    },
  })

  // const { mutateAsync: mutateUpdate, isPending: isPendingUpdate } = useUpdateProductBrand({
  //   onSuccess() {
  //     queryClient.invalidateQueries({ queryKey: ["product-brand-list"] })
  //     queryClient.invalidateQueries({ queryKey: ["infinite-list-product-brand"] })
  //     toast.success("Success update product brand")
  //   },
  //   onError() {
  //     toast.error("Failed update product brand")
  //   },
  // })

  // const { mutateAsync: mutateAdd, isPending: isPendingAdd } = useAddProductBrand({
  //   onSuccess() {
  //     queryClient.invalidateQueries({ queryKey: ["product-brand-list"] })
  //     queryClient.invalidateQueries({ queryKey: ["infinite-list-product-brand"] })
  //     toast.success(`Success add product brand`)
  //   },
  //   onError(err) {
  //     if (err?.message === "duplicate key error: company.id, brand.name") {
  //       toast.error(`Brand Product already exist`)
  //     } else {
  //       toast.error(`Failed add product brand`)
  //     }
  //   },
  // })

  const [search, setSearch] = useState({
    parent: "",
  })

  const [debounceSearch] = useDebounceValue(search, 500)

  const {
    data: dataParents,
    fetchNextPage: fetchNextPageParents,
    hasNextPage: hasNextPageParents,
    isLoading: isLoadingParents,
    isFetchingNextPage: isFetchingNextPageParents,
  } = useInfiniteListProductBrand({
    params: {
      keyword: debounceSearch.parent,
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
    }
  }, [data, dataParents])

  useEffect(() => {
    if (!data) return

    form.reset({
      name: data.name,
      parent: {
        id: data.parent?.id,
        name: data.parent?.name,
      },
    })
  }, [form, data])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (values: formProductBrandSchemaType) => {
    // const payload = {
    //   name: values.name,
    //   ...(values.parent && {
    //     parent: {
    //       id: values.parent.id,
    //     },
    //   }),
    // }
    // if (data) {
    //   await mutateUpdate({
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
      onSubmit={handleSubmit}
      title={`${data?.id ? "Detail" : "Add"} Product Brand`}
      textTrigger={data?.id ? "View Detail" : "Add New"}
      variantTrigger={data?.id ? "ghost-primary" : "primary"}
      isLoadingSubmit={false}
      textSubmit={data?.id ? "Save Changes" : "Submit"}
      wrapContentClassName="max-w-xl"
      listForms={[
        {
          fields: [
            {
              type: "input",
              name: "name",
              label: "Name",
              required: true,
              placeholder: "Input Product Brand Name",
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
      ]}
    />
  )
}

export default FormProductBrand
