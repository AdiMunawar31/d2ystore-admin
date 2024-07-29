import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { SelectType } from "@/lib/types/select"
import type { SectionFilterSearchProps } from "."
import type { SelectedFilters } from ".."

type ListCheckboxProps = {
  list: SelectType[]
  title: string

  selectedFilters: SelectedFilters[]
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters[]>>

  childFilter?: SectionFilterSearchProps
}

const ListCheckbox = ({ list, title, childFilter, selectedFilters, setSelectedFilters }: ListCheckboxProps) => {
  return list.map((item, index) => {
    return (
      <li key={index}>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor={item.value} className="grow text-foreground">
            {item.label}
          </Label>

          <Checkbox
            id={item.value}
            checked={
              childFilter
                ? selectedFilters.some(
                    (i) => i.childFilter?.title === title && i.childFilter.checkbox.some((j) => j.value === item.value)
                  )
                : selectedFilters.some((i) => i.title === title && i.checkbox.some((j) => j.value === item.value))
            }
            onCheckedChange={(checked) => {
              setSelectedFilters((prev) =>
                prev.map((i) => {
                  if (i.title === title) {
                    if (!checked) {
                      return {
                        ...i,
                        checkbox: i.checkbox.filter((obj) => obj.value !== item.value),
                      }
                    }
                    return {
                      ...i,
                      checkbox: [...i.checkbox, item],
                    }
                  }

                  if (childFilter) {
                    if (i.childFilter?.title === childFilter.title && childFilter.title === title) {
                      if (!checked) {
                        return {
                          ...i,
                          ...(i.childFilter && {
                            childFilter: {
                              ...i.childFilter,
                              checkbox: i.childFilter.checkbox.filter((obj) => obj.value !== item.value),
                            },
                          }),
                        }
                      }
                      return {
                        ...i,
                        ...(i.childFilter && {
                          childFilter: {
                            ...i.childFilter,
                            checkbox: [...i.childFilter.checkbox, item],
                          },
                        }),
                      }
                    }
                  }
                  return i
                })
              )
            }}
          />
        </div>
      </li>
    )
  })
}

export default ListCheckbox
