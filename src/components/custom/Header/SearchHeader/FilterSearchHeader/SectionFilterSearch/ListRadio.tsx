import React from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { SelectType } from "@/lib/types/select"
import type { SelectedFilters } from ".."

type ListRadioProps = {
  list: SelectType[]
  title: string

  selectedFilters: SelectedFilters[]
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters[]>>
}

const ListRadio = ({ list, title, selectedFilters, setSelectedFilters }: ListRadioProps) => {
  return (
    <RadioGroup
      defaultValue="option-one"
      value={selectedFilters.find((filter) => filter.title === title)?.radio?.value}
      onValueChange={(value) => {
        setSelectedFilters((prev) => {
          return prev.map((i) => {
            if (i.title === title) {
              return {
                ...i,
                radio: list.find((item) => item.value.toLowerCase() === value.toLowerCase()) || null,
              }
            }
            return i
          })
        })
      }}
    >
      {list.map((item, index) => {
        return (
          <li key={index} className="my-1">
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor={item.value} className="grow text-foreground">
                {item.label}
              </Label>

              <RadioGroupItem id={item.value} value={item.value} />
            </div>
          </li>
        )
      })}
    </RadioGroup>
  )
}

export default ListRadio
