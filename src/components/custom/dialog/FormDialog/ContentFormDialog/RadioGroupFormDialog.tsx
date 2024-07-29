import type { FieldPath, FieldValues } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FormFieldDialogProps } from "."

const RadioGroupFormDialog = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  required,
  ...props
}: FormFieldDialogProps<TFieldValues, TName>) => {
  if (props.render) return null
  if (props.type !== "radio-group") return null

  return (
    <FormField
      {...props}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel required={required}>{label}</FormLabel>}
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex h-10 flex-wrap items-center space-x-3"
              >
                {props.options.map((option) => {
                  return (
                    <FormItem key={option.value} className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>

                      <FormLabel className="text-neutral-grey-800 font-normal">{option.label}</FormLabel>
                    </FormItem>
                  )
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default RadioGroupFormDialog
