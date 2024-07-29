import type { SelectType } from "./select"

export type SubmitFilter = {
  title: string
  type: "checkbox" | "radio" | "date"
  selected: SelectType | SelectType[] | null
}
