import type { FieldPath, FieldValues } from "react-hook-form"
import Combobox from "@/components/custom/Combobox"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import type { FormFieldDialogProps } from "."

const ComboboxFormDialog = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  required,
  ...props
}: FormFieldDialogProps<TFieldValues, TName>) => {
  if (props.render) return null
  if (props.type !== "combobox") return null

  return (
    <FormField
      {...props}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel required={required}>{label}</FormLabel>}
            <FormControl>
              <Combobox
                {...props}
                value={field.value?.name || field.value?.id}
                onValueChange={(_, rawValue) => {
                  const convertValue = {
                    id: rawValue.value,
                    name: rawValue.label,
                  }

                  field.onChange(convertValue)
                }}
                {...(!!props.mutateSelectCreate && {
                  onSelectCreate: async (value) => {
                    if (!props.mutateSelectCreate) return
                    const response = await props.mutateSelectCreate(value)
                    field.onChange(response)
                  },
                })}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default ComboboxFormDialog
