"use client"

import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { CheckIcon, ChevronDown, Loader2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import type { SelectType } from "@/lib/types/select"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import type { SelectedFilters } from "./Header/SearchHeader/FilterSearchHeader"
import ListCheckbox from "./Header/SearchHeader/FilterSearchHeader/SectionFilterSearch/ListCheckbox"

export type ComboboxProps = {
  data: SelectType[]
  value?: SelectType["value"]
  onValueChange?: (value: SelectType["value"], rawValue: SelectType) => void
  placeholder?: string
  removeArrow?: boolean
  contentClassName?: string
  triggerClassName?: string
  disabled?: boolean
  onFetchNextPage?: () => void
  isHasMoreNextPage?: boolean
  isLoadingData?: boolean
  isSubText?: boolean
  subText?: number
  isLoadingValue?: boolean
  label?: string
  multipleCheckbox?: boolean
  title?: string
  selectedFilters?: SelectedFilters[]
  setSelectedFilters?: Dispatch<SetStateAction<SelectedFilters[]>>
} & (ComboboxWithAutoComplete | { withoutAutoComplete: true })

type ComboboxWithAutoComplete = {
  withoutAutoComplete?: boolean | undefined
  placeholderSearch?: string
} & (ComboboxWithAutoCompleteExternal | { search?: undefined })

type ComboboxWithAutoCompleteExternal = {
  search: string
  onSearchChange: (value: string) => void
  onSelectCreate?: (value: string) => void
}

const Combobox = ({
  placeholder,
  data,
  value,
  onValueChange,
  removeArrow,
  contentClassName,
  triggerClassName,
  onFetchNextPage,
  isHasMoreNextPage,
  isLoadingData,
  isLoadingValue,
  disabled,
  isSubText,
  subText,
  label,
  multipleCheckbox,
  selectedFilters,
  setSelectedFilters,
  title,
  ...restProps
}: ComboboxProps) => {
  const [open, setOpen] = useState(false)

  const labelCombobox = selectedFilters?.find((filter) => filter.title === title)?.checkbox
  return (
    <>
      {label && <Label htmlFor="title">{label}</Label>}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "group w-full items-center justify-between px-3 py-2 font-normal normal-case focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-grey-200-bg disabled:text-placeholder disabled:opacity-100",
              triggerClassName
            )}
            disabled={disabled}
          >
            {multipleCheckbox && selectedFilters ? (
              labelCombobox && labelCombobox?.length > 0 ? (
                <div className="flex items-center gap-1 whitespace-nowrap rounded-md bg-neutral-grey-200-bg px-2 py-2">
                  <p className="line-clamp-1 text-ellipsis text-xs font-bold">
                    <span className="capitalize">
                      {Array.isArray(labelCombobox)
                        ? labelCombobox
                            .map((item: { label: string }) => item.label)
                            .slice(0, 3)
                            .join(", ")
                        : ""}
                    </span>

                    {Array.isArray(labelCombobox) && labelCombobox?.length > 3 && (
                      <span>
                        ,{" "}
                        <span className="text-primary">
                          +{labelCombobox.length - 3} other
                          {labelCombobox.length - 3 > 2 ? "s" : ""}
                        </span>
                      </span>
                    )}
                  </p>
                </div>
              ) : (
                <span className="line-clamp-1 text-placeholder">{placeholder ?? "Select item"}</span>
              )
            ) : isLoadingValue ? (
              <span className="animate-spin">
                <Loader2 size={24} />
              </span>
            ) : value ? (
              data.find((item) => item.value?.toLowerCase() === value?.toLowerCase())?.label ||
              data.find((item) => item.label?.toLowerCase() === value?.toLowerCase())?.label ||
              value
            ) : (
              <span className="line-clamp-1 text-placeholder">{placeholder ?? "Select item"}</span>
            )}
            {isSubText && subText ? <div className="line-clamp-1 text-green-500">({subText})</div> : null}

            {!removeArrow
              ? !disabled && (
                  <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-placeholder group-hover:text-accent-foreground" />
                )
              : null}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={"w-fit p-0"}>
          <Command className={cn("relative flex max-h-[300px] w-[400px] max-w-[95vw] flex-col", contentClassName)}>
            {!restProps.withoutAutoComplete ? (
              restProps.search === undefined ? (
                <CommandInput placeholder={restProps.placeholderSearch ?? "Search data..."} className="h-9" />
              ) : (
                <Input
                  value={restProps.search}
                  onChange={(e) => restProps.onSearchChange(e.target.value)}
                  placeholder={restProps.placeholderSearch ?? "Search data..."}
                  startContent={
                    <figure className="pl-2">
                      <Search className="h-4 w-4 text-placeholder" />
                    </figure>
                  }
                  className="pl-2"
                  wrapClassName="h-9 border-t-0 border-x-0 rounded-none focus-within:ring-0"
                />
              )
            ) : null}

            <div id="list-combobox" className="max-h-full grow overflow-y-auto">
              <InfiniteScroll
                dataLength={data.length}
                hasMore={!!isHasMoreNextPage}
                scrollableTarget="list-combobox"
                next={() => {
                  if (onFetchNextPage) {
                    onFetchNextPage()
                  }
                }}
                endMessage={<></>}
                loader={
                  isLoadingData ? (
                    <div className="flex items-center justify-center p-2">
                      <span className="animate-spin">
                        <Loader2 size={24} />
                      </span>
                    </div>
                  ) : null
                }
                className="flex max-h-full flex-col"
              >
                {multipleCheckbox ? (
                  <ul className="space-y-4 p-4">
                    {setSelectedFilters && (
                      <ListCheckbox
                        list={data}
                        title={title || ""}
                        selectedFilters={selectedFilters || []}
                        setSelectedFilters={setSelectedFilters}
                      />
                    )}
                  </ul>
                ) : (
                  <CommandList className="max-h-full">
                    {data.map((item) => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onSelect={() => {
                          if (item?.disabled) return
                          if (onValueChange) onValueChange(item.value === value ? "" : item.value, item)
                          setOpen(false)
                          if (!restProps.withoutAutoComplete && restProps.search !== undefined) {
                            restProps.onSearchChange("")
                          }
                        }}
                        className={cn(item?.disabled && "cursor-not-allowed opacity-50")}
                      >
                        <CheckIcon
                          className={cn(
                            "mr-2 h-4 w-4",
                            value?.toLowerCase() === item.label?.toLowerCase() ||
                              value?.toLowerCase() === item.value?.toLowerCase()
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />

                        {item.label}
                      </CommandItem>
                    ))}

                    {!restProps.withoutAutoComplete && restProps.search && !!restProps.onSelectCreate ? (
                      <CommandItem
                        value={restProps.search}
                        onSelect={() => {
                          if (restProps.onSelectCreate) restProps.onSelectCreate(restProps.search)

                          setOpen(false)
                          restProps.onSearchChange("")
                        }}
                        className="text-primary"
                      >
                        <CheckIcon
                          className={cn("mr-2 h-4 w-4", value === restProps.search ? "opacity-100" : "opacity-0")}
                        />

                        {`Create "${restProps.search}"`}
                      </CommandItem>
                    ) : data.length <= 0 ? (
                      <div className="flex w-full select-none items-center justify-center px-2 py-6 text-sm capitalize outline-none">
                        <span className="italic text-neutral-grey-600-body-text">No results found.</span>
                      </div>
                    ) : null}
                  </CommandList>
                )}
              </InfiniteScroll>
            </div>
          </Command>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Combobox
