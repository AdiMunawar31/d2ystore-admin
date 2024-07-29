/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useDebounceValue } from "usehooks-ts"
import * as z from "zod"
import useInfiniteUomCategoryList from "@/api/products/uom-category/useInfiniteListUomCategory"
// import useAddUnitOfMeasure from "@/api/inventory/product/unit-of-measure/useAddUnitOfMeasure"
// import useUpdateUnitOfMeasure from "@/api/inventory/product/unit-of-measure/useUpdateUnitOfMeasure"
// import useAddUomCategory from "@/api/inventory/product/uom-category/useAddUomCategory"
import FormDialog from "@/components/custom/dialog/FormDialog"
import type {
  FormUnitOfMeasureInterface,
  UnitOfMeasureInterface,
} from "@/lib/interfaces/products/product/unit-of-measure"
import TypeFormatFormUom from "./TypeFormatFormUom"

const formUomSchema: z.ZodType<FormUnitOfMeasureInterface> = z.object({
  name: z.string().min(1, "Name is required"),
  format: z.string().min(1, "Format is required"),
  status: z.enum(["active", "inactive"]),
  uomCategory: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .refine(
      (val) => {
        return !!val.id || !!val.name
      },
      {
        message: "Uom Category is required",
      }
    ),
  formatNumbering: z.object({
    type: z
      .string()
      .min(1, "Type is required")
      .refine((val) => !!val, {
        message: "Type is required",
      }),
    ratio: z.coerce
      .number()
      .min(0, { message: "Ratio cannot be negative" })
      .refine(
        (val) => {
          return !!val
        },
        {
          message: "Ratio is required",
        }
      ),
    rounding: z.coerce
      .number()
      .min(0, { message: "Rounding cannot be negative" })
      .refine(
        (val) => {
          return !!val
        },
        {
          message: "Rounding is required",
        }
      ),
  }),
})

type formUomSchemaType = z.infer<typeof formUomSchema>

type FormUnitOfMeasureProps = {
  data?: Partial<UnitOfMeasureInterface>
  removeTrigger?: boolean
  open?: boolean
  onOpenChange?(open: boolean): void
  onSuccessSubmit?(data: UnitOfMeasureInterface): void
}

const FormUnitOfMeasure = ({ data, removeTrigger, open, onOpenChange, onSuccessSubmit }: FormUnitOfMeasureProps) => {
  const queryClient = useQueryClient()

  const form = useForm<formUomSchemaType>({
    resolver: zodResolver(formUomSchema),
    defaultValues: {
      status: "active",
      format: "",
      formatNumbering: {
        type: "",
      },
    },
  })

  useEffect(() => {
    if (!data) return

    form.reset({
      name: data.name,
      status: data.status || "active",
      format: data.format,
      uomCategory: {
        id: data.uom_category?.id,
        name: data.uom_category?.name,
      },
      formatNumbering: {
        ratio: data.format_numbering?.ratio,
        rounding: data.format_numbering?.rounding,
        type: data.format_numbering?.type,
      },
    })
  }, [form, data])

  // const { mutateAsync: mutateUpdate, isPending: isPendingUpdate } = useUpdateUnitOfMeasure({
  //   onSuccess(data) {
  //     queryClient.invalidateQueries({ queryKey: ["unit-of-measure-list"] })
  //     queryClient.invalidateQueries({ queryKey: ["infinite-list-unit-of-measure"] })
  //     toast.success("Success update unit of measure")
  //     if (onSuccessSubmit) onSuccessSubmit(data)
  //   },
  //   onError() {
  //     toast.error("Failed update unit of measure")
  //   },
  // })

  // const { mutateAsync: mutateAdd, isPending: isPendingAdd } = useAddUnitOfMeasure({
  //   onSuccess(data) {
  //     queryClient.invalidateQueries({ queryKey: ["unit-of-measure-list"] })
  //     queryClient.invalidateQueries({ queryKey: ["infinite-list-unit-of-measure"] })
  //     toast.success(`Success add unit of measure`)
  //     if (onSuccessSubmit) onSuccessSubmit(data)
  //   },
  //   onError() {
  //     toast.error(`Failed add unit of measure`)
  //   },
  // })

  const [search, setSearch] = useState({
    uomCategory: "",
  })
  const [debounceSearch] = useDebounceValue(search, 500)

  // const { mutateAsync: mutateCreateUomCategory, isPending: isPendingCreateUomCategory } = useAddUomCategory({
  //   onError: () => {
  //     toast.error("Error create uom category")
  //   },
  // })

  const {
    data: dataUomCategories,
    fetchNextPage: fetchNextPageUomCategories,
    hasNextPage: hasNextPageUomCategories,
    isLoading: isLoadingUomCategories,
    isFetchingNextPage: isFetchingNextPageUomCategories,
  } = useInfiniteUomCategoryList({
    params: {
      keyword: debounceSearch.uomCategory,
    },
  })

  const listDataCombobox = useMemo(() => {
    return {
      uomCategories:
        dataUomCategories?.pages.flat().map((item) => ({
          label: item.name,
          value: item.id,
        })) || [],
    }
  }, [dataUomCategories])

  const handleSubmit = async (values: formUomSchemaType) => {
    const payload = {
      name: values.name,
      status: values.status,
      format: values.format,
      uom_category_id: values.uomCategory.id,
      format_numbering: {
        type: values.formatNumbering.type,
        ratio: Number(values.formatNumbering.ratio) || 0,
        rounding: Number(values.formatNumbering.rounding) || 0,
      },
    }

    // if (data && data.id) {
    //   await mutateUpdate({
    //     id: data.id,
    //     body: payload,
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
      title={`${data?.id ? "Detail" : "Add"} Unit Of Measure`}
      textTrigger={data?.id ? "View Detail" : "Add New"}
      variantTrigger={data?.id ? "ghost-primary" : "primary"}
      removeTrigger={removeTrigger}
      open={open}
      onOpenChange={onOpenChange}
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
              placeholder: "Input UoM Name (e.g. Gram)",
            },
            {
              type: "radio-group",
              name: "status",
              label: "Status",
              options: [
                {
                  label: "Active",
                  value: "active",
                },
                {
                  label: "Inactive",
                  value: "inactive",
                },
              ],
            },
            {
              type: "input",
              name: "format",
              label: "UoM Format",
              required: true,
              placeholder: "Input UoM Format (e.g, gr)",
            },
            {
              type: "combobox",
              name: "uomCategory",
              label: "Uom Category",
              placeholder: "Choose Uom Category",
              required: true,
              data: listDataCombobox.uomCategories,
              isHasMoreNextPage: hasNextPageUomCategories,
              onFetchNextPage: fetchNextPageUomCategories,
              isLoadingData: isLoadingUomCategories || isFetchingNextPageUomCategories,
              isLoadingValue: false,
              search: search.uomCategory,
              onSearchChange: (value) => {
                setSearch((prev) => ({
                  ...prev,
                  uomCategory: value,
                }))
              },
            },
          ],
        },
        {
          title: "Numbering / Format",
          fields: [
            {
              name: "formatNumbering.type",
              label: "Type",
              required: true,
              render: (props) => <TypeFormatFormUom {...props} />,
            },
            {
              type: "input",
              typeInput: "number",
              name: "formatNumbering.ratio",
              label: "Ratio",
              required: true,
              placeholder: "Input Ratio to Reference (e.g. 1.000)",
            },
            {
              type: "input",
              typeInput: "number",
              name: "formatNumbering.rounding",
              label: "Rounding Precision",
              required: true,
              placeholder: "Input Rounding Precision (e.g. 0.010000)",
            },
          ],
        },
      ]}
    />
  )
}

export default FormUnitOfMeasure
