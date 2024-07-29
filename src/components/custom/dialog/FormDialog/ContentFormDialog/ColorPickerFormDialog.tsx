import type { FieldPath, FieldValues } from "react-hook-form"
import ColorPicker from "@/components/custom/ColorPicker"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import type { FormFieldDialogProps } from "."

const ColorPickerFormDialog = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  required,
  ...props
}: FormFieldDialogProps<TFieldValues, TName>) => {
  if (props.render) return null
  if (props.type !== "color-picker") return null

  return (
    <FormField
      {...props}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel required={required}>{label}</FormLabel>}
            <FormControl>
              <ColorPicker color={field.value} onChange={(color) => field.onChange(color.hex)} {...props} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default ColorPickerFormDialog
