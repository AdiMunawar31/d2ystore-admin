import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form"
import Combobox from "@/components/custom/Combobox"
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const listType = [
  {
    value: "smaller",
    label: "Smaller than reference",
  },
  {
    value: "bigger",
    label: "Bigger then reference",
  },
]

const TypeFormatFormUom = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  field,
}: {
  field: ControllerRenderProps<TFieldValues, TName>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<TFieldValues>
}) => {
  return (
    <FormItem className="md:col-span-2">
      <FormLabel required>Type</FormLabel>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center">
        <FormControl>
          <Combobox
            data={listType}
            value={field.value}
            onValueChange={field.onChange}
            disabled={field.value === "reference"}
          />
        </FormControl>

        <FormItem className="flex items-center gap-2">
          <FormControl>
            <Switch
              id="set-as-reference-type"
              checked={field.value === "reference"}
              onCheckedChange={(state) => {
                if (state) {
                  field.onChange("reference")
                  return
                }

                field.onChange("")
              }}
            />
          </FormControl>

          <Label htmlFor="set-as-reference-type">Set as Reference</Label>
        </FormItem>
      </div>
      <FormMessage />
    </FormItem>
  )
}

export default TypeFormatFormUom
