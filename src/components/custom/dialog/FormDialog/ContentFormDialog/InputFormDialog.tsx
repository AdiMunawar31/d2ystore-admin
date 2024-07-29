import type { FieldPath, FieldValues } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { FormFieldDialogProps } from "."

const InputFormDialog = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  required,
  ...props
}: FormFieldDialogProps<TFieldValues, TName>) => {
  if (props.render) return null
  if (props.type !== "input") return null

  const { typeInput, ...restProps } = props

  return (
    <FormField
      {...restProps}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel required={required}>{label}</FormLabel>}
            <FormControl>
              <Input {...restProps} type={typeInput} {...field} value={field?.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default InputFormDialog
