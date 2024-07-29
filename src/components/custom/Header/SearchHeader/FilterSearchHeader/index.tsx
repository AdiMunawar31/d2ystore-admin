import React from "react"
import type { Dispatch, SetStateAction } from "react"
import { useMemo, useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { SelectType } from "@/lib/types/select"
import type { SectionFilterSearchProps } from "./SectionFilterSearch"
import SectionFilterSearch from "./SectionFilterSearch"

interface SubmitFilter {
  title: string
  type: "checkbox" | "radio" | "date"
  selected: SelectType | SelectType[] | null
}

export type SelectedFilters = {
  title: string
  type: "radio" | "checkbox" | "date"
  checkbox: SelectType[]
  radio: SelectType | null
  date: SelectType | null
  childFilter?: SelectedFilters
}

export type FilterSearchHeaderProps = {
  filters?: SectionFilterSearchProps[]
  filterPopup?: boolean
  responsiveFilter?: boolean
  filterPopupAction?: Dispatch<SetStateAction<boolean>>
  onSubmitFilter?: (arrayValue: SubmitFilter[], objectValue: { [title: string]: SubmitFilter }) => void

  onClearFilter?: () => void
  search?: string
  setSearch?: Dispatch<SetStateAction<string>>
}

const ContentFilterSearchHeader = ({
  filters,
  // filterPopup,
  // filterPopupAction,
  // responsiveFilter,
  onSubmitFilter,
  onClearFilter,
  setOpen,
}: FilterSearchHeaderProps & { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const defaultSelectedFilters: SelectedFilters[] = useMemo(() => {
    return (
      filters?.map((item) => ({
        title: item.title,
        type: item.type || "checkbox",
        checkbox: item.selected ? (Array.isArray(item.selected) ? item.selected : []) : [],
        radio: item.selected ? (Array.isArray(item.selected) ? null : item.selected) : null,
        date: item.selected ? (Array.isArray(item.selected) ? null : item.selected) : null,
        ...(item.childFilter && {
          childFilter: {
            title: item.childFilter?.title,
            type: item.childFilter?.type || "checkbox",
            checkbox: item.childFilter?.selected
              ? Array.isArray(item.childFilter?.selected)
                ? item.childFilter?.selected
                : []
              : [],
            radio: item.childFilter?.selected
              ? Array.isArray(item.childFilter?.selected)
                ? null
                : item.childFilter?.selected
              : null,
            date: item.childFilter?.selected
              ? Array.isArray(item.childFilter?.selected)
                ? null
                : item.childFilter?.selected
              : null,
          },
        }),
      })) || []
    )
  }, [filters])

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters[]>(defaultSelectedFilters)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //Notes (Qodana): unused constant isDisabledSubmit
  // const isDisableSubmit = useMemo(() => {
  //   return selectedFilters.every(
  //     (item) => item.checkbox.length === 0 && item.childFilter?.checkbox.length === 0 && item.radio === null
  //   )
  // }, [selectedFilters])

  const isDisableClear = useMemo(() => {
    return defaultSelectedFilters.every((item) => item.checkbox.length === 0 && item.radio === null)
  }, [defaultSelectedFilters])

  if (!filters) return null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  // Notes (Qodana) unused constant resetSelected
  // const resetSelected = (data: any) => {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   return data.map((item: any) => {
  //     const newItem = { ...item }
  //     newItem.checkbox = []
  //
  //     if (newItem.childFilter) {
  //       newItem.childFilter.checkbox = []
  //     }
  //
  //     return newItem
  //   })
  // }

  return (
    <div className="flex flex-col divide-y">
      <div
        className="grid min-w-[18rem] divide-x"
        style={{
          gridTemplateColumns: `repeat(${filters.length > 0 ? filters.length : 1}, minmax(0, 1fr))`,
        }}
      >
        {filters.map((object, index) => {
          return (
            <SectionFilterSearch
              key={index}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              {...object}
            />
          )
        })}
      </div>

      <div className="flex w-full items-center justify-end gap-2 p-4">
        {!isDisableClear && (
          <Button
            variant="ghost-destructive"
            onClick={() => {
              setOpen(false)
              onClearFilter && onClearFilter()
            }}
          >
            Clear Filter
          </Button>
        )}

        <Button
          variant="primary"
          onClick={() => {
            const convertSelectedFiltersToObject = selectedFilters.reduce(
              (obj: { [title: string]: SubmitFilter }, item) => {
                obj[item.title] = {
                  title: item.title,
                  type: item.type,
                  selected: item.type === "checkbox" ? item.checkbox : item.type === "date" ? item.date : item.radio,
                }
                return obj
              },
              {}
            )

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const transformArray = (arr: any[]) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              let result: any = []

              arr.forEach((item) => {
                const newItem = { ...item }

                if (newItem.checkbox) {
                  newItem.selected = newItem.checkbox
                }

                if (newItem.radio) {
                  newItem.selected = newItem.radio
                }

                if (newItem.date) {
                  newItem.selected = newItem.date
                }

                result.push(newItem)

                if (newItem.childFilter) {
                  const childFilters = transformArray([newItem.childFilter])
                  result = [...result, ...childFilters]
                }

                delete newItem?.radio
                delete newItem?.checkbox
                delete newItem?.childFilter
                delete newItem?.date
              })
              return result
            }
            const convertSelectedFiltersToArray = transformArray(selectedFilters)

            onSubmitFilter && onSubmitFilter(convertSelectedFiltersToArray, convertSelectedFiltersToObject)

            setOpen(false)
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

const FilterSearchHeader = ({ onClearFilter, search, setSearch, ...props }: FilterSearchHeaderProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {search && search.length > 0 && (
        <div
          className="mx-1 flex h-[20px] w-[20px] cursor-pointer items-center rounded-full bg-neutral-grey-400 p-0.5 text-white hover:opacity-50"
          onClick={(e) => {
            e.stopPropagation()
            setSearch && setSearch("")
          }}
        >
          <X />
        </div>
      )}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-full rounded-none border-l p-0 px-2">
            <ChevronDown size={24} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="max-h-[80vh] min-w-[20rem] overflow-auto p-0">
          <ContentFilterSearchHeader setOpen={setOpen} {...props} onClearFilter={onClearFilter} />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default FilterSearchHeader
