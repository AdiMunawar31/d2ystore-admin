import type { Dispatch, SetStateAction } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader2, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { SelectType } from "@/lib/types/select"
import type { SelectedFilters } from ".."
import DateRange from "./DateRange"
import ListCheckbox from "./ListCheckbox"
import ListRadio from "./ListRadio"

export type SelectedFilter = {
  checkbox: SelectType[]
  radio: SelectType | null
  date: SelectType | null
}

export type SectionFilterSearchProps = {
  title: string

  search?: string
  onSearchChange?: (value: string) => void

  list: SelectType[]
  onFetchNextPage?: () => void
  isHasMoreNextPage?: boolean
  isLoadingData?: boolean
  childFilter?: SectionFilterSearchProps
} & (SelectedCheckbox | SelectedRadio | SelectedDate)

type SelectedCheckbox = {
  type?: "checkbox"
  selected?: SelectType[]
}

type SelectedRadio = {
  type?: "radio"
  selected?: SelectType | null
}

type SelectedDate = {
  type?: "date"
  selected?: SelectType | null
}

const SectionFilterSearch = ({
  title,
  type = "checkbox",
  childFilter,

  selectedFilters,
  setSelectedFilters,

  search,
  onSearchChange,

  list,
  isHasMoreNextPage,
  onFetchNextPage,
  isLoadingData,
}: SectionFilterSearchProps & {
  selectedFilters: SelectedFilters[]
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters[]>>
}) => {
  return (
    <div className="flex flex-col divide-y">
      <div className="flex w-auto flex-col divide-y">
        <h4 className="w-full px-4 py-3 text-sm font-bold text-neutral-800">{title}</h4>

        <div className="flex flex-col">
          {search !== undefined && (
            <div className="p-4 pb-0">
              <Input
                value={search}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                wrapClassName="w-full p-0"
                placeholder={`Search ${title || "data"}`}
                startContent={
                  <figure className="pl-3">
                    <Search size={16} className="opacity-50" />
                  </figure>
                }
              />
            </div>
          )}

          <div
            id={`list-filters-${title.toLowerCase()}`}
            className={`${childFilter ? "h-[20vh]" : "h-[40vh]"} grow overflow-y-auto`}
          >
            {type === "date" ? (
              <div className="space-y-4 p-4">
                <DateRange title={title} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
              </div>
            ) : (
              <InfiniteScroll
                dataLength={list.length}
                hasMore={!!isHasMoreNextPage}
                scrollableTarget={`list-filters-${title.toLowerCase()}`}
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
                className="flex flex-col"
              >
                <ul className="space-y-4 p-4">
                  {type === "checkbox" ? (
                    <ListCheckbox
                      list={list}
                      title={title}
                      selectedFilters={selectedFilters}
                      setSelectedFilters={setSelectedFilters}
                    />
                  ) : (
                    <ListRadio
                      list={list}
                      title={title}
                      selectedFilters={selectedFilters}
                      setSelectedFilters={setSelectedFilters}
                    />
                  )}
                </ul>
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>

      {childFilter && (
        <div className="flex flex-col divide-y">
          <h4 className="w-full px-4 py-3 text-sm font-bold text-neutral-800">{childFilter.title}</h4>

          <div className="flex flex-col">
            {childFilter.search !== undefined && (
              <div className="p-4 pb-0">
                <Input
                  value={childFilter.search}
                  onChange={(e) => childFilter.onSearchChange && childFilter.onSearchChange(e.target.value)}
                  wrapClassName="w-full p-0"
                  placeholder={`Search ${childFilter.title || "data"}`}
                  startContent={
                    <figure className="pl-3">
                      <Search size={16} className="opacity-50" />
                    </figure>
                  }
                />
              </div>
            )}

            <div id="list-filters" className={`${childFilter ? "h-[20vh]" : "h-[40vh]"} grow overflow-y-auto`}>
              <InfiniteScroll
                dataLength={childFilter.list.length}
                hasMore={!!childFilter.isHasMoreNextPage}
                scrollableTarget="list-filters"
                next={() => {
                  if (childFilter.onFetchNextPage) {
                    childFilter.onFetchNextPage()
                  }
                }}
                endMessage={<></>}
                loader={
                  childFilter.isLoadingData ? (
                    <div className="flex items-center justify-center p-2">
                      <span className="animate-spin">
                        <Loader2 size={24} />
                      </span>
                    </div>
                  ) : null
                }
                className="flex max-h-full flex-col"
              >
                <ul className="space-y-4 p-4">
                  {!childFilter.type ? (
                    <ListCheckbox
                      list={childFilter.list}
                      title={childFilter.title}
                      selectedFilters={selectedFilters}
                      setSelectedFilters={setSelectedFilters}
                      childFilter={childFilter}
                    />
                  ) : childFilter.type === "checkbox" ? (
                    <ListCheckbox
                      list={childFilter.list}
                      title={childFilter.title}
                      selectedFilters={selectedFilters}
                      setSelectedFilters={setSelectedFilters}
                      childFilter={childFilter}
                    />
                  ) : (
                    <ListRadio
                      list={childFilter.list}
                      title={childFilter.title}
                      selectedFilters={selectedFilters}
                      setSelectedFilters={setSelectedFilters}
                    />
                  )}
                </ul>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SectionFilterSearch
