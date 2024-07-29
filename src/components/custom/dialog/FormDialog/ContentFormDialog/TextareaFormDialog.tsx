import type { FieldPath, FieldValues } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import type { FormFieldDialogProps } from "."

const TextareaFormDialog = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  required,
  ...props
}: FormFieldDialogProps<TFieldValues, TName>) => {
  if (props.render) return null
  if (props.type !== "textarea") return null

  return (
    <FormField
      {...props}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel required={required}>{label}</FormLabel>}
            <FormControl>
              <Textarea {...props} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default TextareaFormDialog
