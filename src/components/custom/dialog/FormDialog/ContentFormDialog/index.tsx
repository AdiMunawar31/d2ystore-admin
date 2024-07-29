"use client"

import React, { useState } from "react"
import type { HTMLInputTypeAttribute, ReactNode } from "react"
import { useCallback } from "react"
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
  UseFormReturn,
  UseFormStateReturn,
} from "react-hook-form"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { useUnmount } from "usehooks-ts"
import type { ColorPickerProps } from "@/components/custom/ColorPicker"
import type { ComboboxProps } from "@/components/custom/Combobox"
import type { DatePickerProps } from "@/components/custom/DatePicker"
import { Button } from "@/components/ui/button"
import { DialogFooter, DialogTitle } from "@/components/ui/dialog"
import { Form, FormField } from "@/components/ui/form"
import type { InputProps } from "@/components/ui/input"
import type { TextareaProps } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import CustomAlertDialog from "../../CustomAlertDialog"
import ColorPickerFormDialog from "./ColorPickerFormDialog"
import ComboboxFormDialog from "./ComboboxFormDialog"
import DatePickerFormDialog from "./DatePickerFormDialog"
import InputFormDialog from "./InputFormDialog"
import RadioGroupFormDialog from "./RadioGroupFormDialog"
import TextareaFormDialog from "./TextareaFormDialog"

export interface FormSectionDialogProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  title?: ReactNode
  containerClassName?: string
  wrapFieldsClassName?: string
  fields: FormFieldDialogProps<TFieldValues, TName>[]
}

export type FormFieldDialogProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  label?: string
  required?: boolean
  isHidden?: boolean
} & (CustomRenderField<TFieldValues, TName> | TypeRenderField) &
  UseControllerProps<TFieldValues, TName>

type CustomRenderField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, TName>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<TFieldValues>
  }) => React.ReactElement
}

type TypeRenderField = { render?: undefined } & (
  | InputFormDialog
  | TextareaFormDialog
  | DatePickerFormDialog
  | ColorPickerFormDialog
  | ComboboxFormDialog
  | RadioGroupFormDialog
)

type InputFormDialog = {
  type: "input"
  typeInput?: HTMLInputTypeAttribute
} & InputProps

type TextareaFormDialog = {
  type: "textarea"
} & TextareaProps

type RadioGroupFormDialog = {
  type: "radio-group"
  options: {
    label: string
    value: string
  }[]
}

type DatePickerFormDialog = {
  type: "date-picker"
} & DatePickerProps

type ColorPickerFormDialog = {
  type: "color-picker"
} & ColorPickerProps

type ComboboxFormDialog = { type: "combobox" } & ComboboxProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutateSelectCreate?: (value: string) => Promise<any>
  }

export type ContentFormDialogProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<TFieldValues, any, undefined>
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (args?: any) => any | Promise<any>
  textSubmit?: string
  onDelete?: () => void
  textCancel?: string
  isLoadingSubmit?: boolean
  isDisableSubmit?: boolean
  isButtonDelete?: boolean
  autoClose?: boolean
  onCancel?: () => void
  hideCancel?: boolean
  withModalConfirmation?: boolean
} & (ContentWithListForm<TFieldValues, TName> | ContentWithChildren<TFieldValues, TName>)

type ContentWithChildren<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  children: React.ReactNode
  listForms?: FormSectionDialogProps<TFieldValues, TName>[]
  combineFormsWithChildren?: boolean
}

type ContentWithListForm<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  listForms: FormSectionDialogProps<TFieldValues, TName>[]
  children?: React.ReactNode
  combineFormsWithChildren?: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-types
const ContentFormDialog = <T extends {}>({
  form,
  title,
  onSubmit,
  textSubmit,
  textCancel,
  isLoadingSubmit,
  isDisableSubmit,
  setOpen,
  isButtonDelete = false,
  autoClose = true,
  onDelete,
  onCancel,
  hideCancel = false,
  withModalConfirmation,
  ...restProps
}: ContentFormDialogProps<T> & { setOpen: (open: boolean) => void }) => {
  useUnmount(() => {
    form.reset()
  })

  const [confirmation, setConfirmation] = useState<{ state: boolean; value?: T | undefined }>({
    state: false,
    value: undefined,
  })

  const renderContent = useCallback(() => {
    if (restProps.listForms && restProps.listForms.length > 0) {
      return (
        <div className="flex flex-col gap-4 p-4">
          {restProps.listForms.map((formSection, index) => (
            <section key={index} className={cn("flex flex-col", formSection.containerClassName)}>
              {formSection.title && <h3 className="text-sm font-bold">{formSection.title}</h3>}

              <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", formSection.wrapFieldsClassName)}>
                {formSection.fields.map((field, index) => {
                  if (field.isHidden) {
                    return <></>
                  }
                  if (field.render) {
                    return <FormField key={index} {...field} render={field.render} />
                  }

                  if (field.type === "textarea") {
                    return <TextareaFormDialog key={index} {...field} />
                  }
                  if (field.type === "radio-group") {
                    return <RadioGroupFormDialog key={index} {...field} />
                  }
                  if (field.type === "color-picker") {
                    return <ColorPickerFormDialog key={index} {...field} />
                  }
                  if (field.type === "date-picker") {
                    return <DatePickerFormDialog key={index} {...field} />
                  }
                  if (field.type === "combobox") {
                    return <ComboboxFormDialog key={index} {...field} />
                  }
                  return <InputFormDialog key={index} {...field} />
                })}
              </div>
            </section>
          ))}
          {restProps.combineFormsWithChildren && <div className="flex flex-col">{restProps.children}</div>}
        </div>
      )
    }

    if (restProps.children) {
      return <div className="flex flex-col p-4">{restProps.children}</div>
    }

    return null
  }, [restProps])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          if (withModalConfirmation) {
            setConfirmation({ state: true, value: data })
          } else {
            await onSubmit(data)
            autoClose ? setOpen(false) : null
          }
        })}
        className="relative max-h-screen overflow-y-auto"
      >
        {title && <DialogTitle className="sticky left-0 top-0 z-10 border-b bg-background">{title}</DialogTitle>}

        {renderContent()}

        <DialogFooter className="sticky bottom-0 left-0 z-10 border-t bg-background">
          {isButtonDelete && (
            <Button type="button" onClick={onDelete} variant={"ghost"} className="mr-auto p-0 text-destructive">
              Delete
            </Button>
          )}

          {!hideCancel && (
            <DialogPrimitive.Close asChild>
              <Button variant={"outline-primary"} className="min-w-20" onClick={() => onCancel && onCancel()}>
                {textCancel ?? "Cancel"}
              </Button>
            </DialogPrimitive.Close>
          )}

          <Button
            type="submit"
            variant={"primary"}
            className="min-w-24"
            disabled={isDisableSubmit || isLoadingSubmit}
            isLoading={isLoadingSubmit}
          >
            {textSubmit ?? "Submit"}
          </Button>
        </DialogFooter>
      </form>
      <CustomAlertDialog
        hideDialogTrigger
        openDialog={confirmation.state}
        variantTrigger="outline-destructive"
        textTrigger="Submit"
        title="Confirmation Submit"
        warning="Data can’t be edit after submit, please make sure the data before."
        description="Are you agree to submit the new data in Stock Adjustment?"
        setOpenDialog={(open) => setConfirmation((prev) => ({ ...prev, state: open }))}
        onConfirm={async () => {
          if (confirmation.value) {
            await onSubmit(confirmation.value)
            setOpen(false)
          }
        }}
      />
    </Form>
  )
}

export default ContentFormDialog
