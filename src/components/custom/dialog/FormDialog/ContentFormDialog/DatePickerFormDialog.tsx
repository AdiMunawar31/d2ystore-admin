import type { FieldPath, FieldValues } from "react-hook-form"
import DatePicker from "@/components/custom/DatePicker"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import type { FormFieldDialogProps } from "."

const DatePickerFormDialog = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  required,
  disabled,
  ...props
}: FormFieldDialogProps<TFieldValues, TName>) => {
  if (props.render) return null
  if (props.type !== "date-picker") return null

  return (
    <FormField
      {...props}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel required={required}>{label}</FormLabel>}
            <FormControl>
              <DatePicker
                {...props}
                mode={props.mode || "single"}
                disabled={disabled}
                selected={field.value}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSelect={(value: any) => {
                  field.onChange(value)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default DatePickerFormDialog
