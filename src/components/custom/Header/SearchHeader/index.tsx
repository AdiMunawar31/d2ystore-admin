import type { Dispatch, SetStateAction } from "react"
import { Search, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { FilterSearchHeaderProps } from "./FilterSearchHeader"
import FilterSearchHeader from "./FilterSearchHeader"

export type SearchHeaderProps = {
  search?: string
  setSearch?: Dispatch<SetStateAction<string>>
  placeholderSearch?: string
  hideSelectedFilter?: boolean
  onDeleteFilterByTitle?: (title: string) => void
} & FilterSearchHeaderProps

const SearchHeader = ({
  placeholderSearch,
  search,
  setSearch,
  onDeleteFilterByTitle,
  hideSelectedFilter = false,
  ...props
}: SearchHeaderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // Notes (Qodana): unused constant selectedFilter
  // const selectedFilter = useMemo(() => {
  //   const filters = props.filters || []
  //
  //   return filters.filter((item) => item.selected && (Array.isArray(item.selected) ? item.selected.length > 0 : false))
  // }, [props.filters])

  const resultFilter = () => {
    if (!hideSelectedFilter && Array.isArray(props.filters)) {
      return props.filters.map((item, index) => {
        const itemChildFilterSelected = item?.childFilter?.selected || []
        return (
          <div className={`flex gap-2 empty:hidden ${props?.responsiveFilter && "p-1"}`} key={index}>
            {Array.isArray(item.selected) && item.selected.length > 0 && (
              <div className="flex items-center gap-1 whitespace-nowrap rounded-md bg-neutral-grey-200-bg px-2 py-2">
                <p className="line-clamp-1 text-ellipsis text-xs font-bold">
                  <span className="capitalize">
                    {item.selected
                      .map((item) => item.label)
                      .slice(0, 1)
                      .join(", ")}
                  </span>
                  {item.selected.length > 1 && (
                    <span>
                      ,{" "}
                      <span className="text-primary">
                        +{item.selected.length - 1} other
                        {item.selected.length - 1 > 2 ? "s" : ""}
                      </span>
                    </span>
                  )}
                </p>
                <Button
                  size={"icon"}
                  type="button"
                  variant={"ghost-destructive"}
                  className="h-fit w-fit p-0 text-foreground"
                  onClick={() => onDeleteFilterByTitle && onDeleteFilterByTitle(item.title)}
                >
                  <X size={16} />
                </Button>
              </div>
            )}
            {Array.isArray(itemChildFilterSelected) && itemChildFilterSelected.length > 0 && (
              <div className="flex items-center gap-1 whitespace-nowrap rounded-md bg-neutral-grey-200-bg px-2 py-2">
                <p className="line-clamp-1 text-ellipsis text-xs font-bold">
                  <span className="capitalize">
                    {itemChildFilterSelected
                      ?.map((item) => item.label)
                      ?.slice(0, 1)
                      ?.join(", ")}
                  </span>
                  {itemChildFilterSelected.length > 1 && (
                    <span>
                      ,{" "}
                      <span className="text-primary">
                        +{itemChildFilterSelected.length - 1} other
                        {itemChildFilterSelected.length - 1 > 2 ? "s" : ""}
                      </span>
                    </span>
                  )}
                </p>
                <Button
                  size={"icon"}
                  type="button"
                  variant={"ghost-destructive"}
                  className="h-fit w-fit p-0 text-foreground"
                  onClick={() => onDeleteFilterByTitle && onDeleteFilterByTitle(item?.childFilter?.title || "")}
                >
                  <X size={16} />
                </Button>
              </div>
            )}
            {item?.type === "radio" && item?.selected && (
              <div className="flex items-center gap-1 whitespace-nowrap rounded-md bg-neutral-grey-200-bg px-2 py-2">
                <p className="line-clamp-1 text-ellipsis text-xs font-bold">
                  <span className="capitalize">{item?.selected?.label}</span>
                </p>
                <Button
                  size={"icon"}
                  type="button"
                  variant={"ghost-destructive"}
                  className="h-fit w-fit p-0 text-foreground"
                  onClick={() => onDeleteFilterByTitle && onDeleteFilterByTitle(props.filters ? item?.title : "")}
                >
                  <X size={16} />
                </Button>
              </div>
            )}
            {item?.type === "date" && item?.selected && item?.selected?.start_date && item?.selected?.end_date && (
              <div className="flex items-center gap-1 whitespace-nowrap rounded-md bg-neutral-grey-200-bg px-2 py-2">
                <p className="line-clamp-1 text-ellipsis text-xs font-bold">
                  <span className="capitalize">{item?.selected?.label}</span>
                </p>
                <Button
                  size={"icon"}
                  type="button"
                  variant={"ghost-destructive"}
                  className="h-fit w-fit p-0 text-foreground"
                  onClick={() => onDeleteFilterByTitle && onDeleteFilterByTitle(props.filters ? item?.title : "")}
                >
                  <X size={16} />
                </Button>
              </div>
            )}
          </div>
        )
      })
    } else {
      return ""
    }
  }

  return (
    <>
      <Input
        value={search}
        onChange={(e) => setSearch && setSearch(e.target.value)}
        wrapClassName={cn(
          `p-0 w-fit transition-all w-fit md:min-w-56 lg:min-w-96 ${props?.responsiveFilter && "h-auto"}`
        )}
        placeholder={placeholderSearch ?? "Search Data"}
        responsiveFilter={props?.responsiveFilter || false}
        responsiveData={resultFilter()}
        startContent={
          <div className="flex items-center gap-2">
            <figure className="pl-3">
              <Search size={16} className="opacity-50" />
            </figure>

            {resultFilter()}
          </div>
        }
        endContent={
          !props.filterPopup && props.filters && props.filters.length > 0 ? (
            <FilterSearchHeader {...props} search={search} setSearch={setSearch} />
          ) : props.filterPopup ? (
            <Button
              variant="ghost"
              className="h-full rounded-none border-l p-0 px-2"
              onClick={() => props.filterPopupAction && props.filterPopupAction(true)}
            >
              <ChevronDown size={24} />
            </Button>
          ) : (
            search &&
            search.length > 0 && (
              <Button
                size={"icon"}
                className="mx-1 h-[20px] w-[20px] rounded-full bg-neutral-grey-400 p-0.5 text-white"
                onClick={() => {
                  setSearch && setSearch("")
                }}
              >
                <X />
              </Button>
            )
          )
        }
      />
    </>
  )
}

export default SearchHeader
