import type { Dispatch, ReactNode, SetStateAction } from "react"
import type { ButtonProps } from "@/components/ui/button"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { DropdownOptionInterface } from "@/lib/interfaces/component"
import AddActionHeader from "./ActionHeader/AddActionHeader"
import SelectedActionHeader from "./ActionHeader/SelectedActionHeader"
import type { ListActionHeaderProps } from "./ListActionHeader"
import ListActionHeader from "./ListActionHeader"
import type { SearchHeaderProps } from "./SearchHeader"
import SearchHeader from "./SearchHeader"
import StartContentHeader from "./StartContentHeader"

type HeaderProps<T> = {
  title: string
  isStartContent?: boolean
  customComponent?: ReactNode
  metaList?: MetaApiResponseInterface | undefined
  setPageList?: Dispatch<SetStateAction<number>>
  dropdownItem?: DropdownOptionInterface[]
  customDropdownTrigger?: ReactNode
  customButton?: ReactNode
  selectedDropdownItem?: DropdownOptionInterface[]
  selectedCustomDropdownTrigger?: ReactNode
  deleteTextTrigger?: string
  deleteTitle?: string
  deleteDescription?: string
  deleteWarning?: string
  deleteOnConfirm?: () => void | Promise<void>
  deleteIsLoadingConfirm?: boolean
  layout?: "table" | "grid"
  setLayout?: Dispatch<SetStateAction<"table" | "grid">>
  selectedData?: T[]
  selectedCustomHeader?: ReactNode
  customSelectedAction?: ReactNode
  deleteVariantTrigger?: ButtonProps["variant"]
  deleteTextConfirm?: string
  hideWarning?: boolean
  isPagination?: boolean
  isSearch?: boolean
  startContent?: ReactNode
} & SearchHeaderProps &
  ListActionHeaderProps<T>

// eslint-disable-next-line @typescript-eslint/ban-types
const CustomHeader = <T extends {}>({
  title, //Judul Header
  isStartContent,
  customComponent,
  metaList, //metalist untuk pagination
  setPageList, //set page pagination
  dropdownItem, //dropdown item bentuk array (untuk button end content), kalau tidak diisi button tidak tampil
  customDropdownTrigger, // defaultnya icon Lucide MoreVertikal, kalau mau custom bisa dimasukkan ReactNode disini. ex: <div classname="flex">More <DropdownIcon /></div>
  customButton, //custom button endcontent, kalau tidak diisi button tidak muncul. Biasanya digunakan untuk button "Add New"
  selectedData, // selected data dari table
  selectedDropdownItem, //dropdown item bentuk array (untuk button end content waktu selected), kalau tidak diisi button tidak tampil
  selectedCustomDropdownTrigger, // defaultnya icon Lucide MoreVertikal, kalau mau custom bisa dimasukkan ReactNode disini. ex: <div classname="flex">More <DropdownIcon /></div>
  deleteTextTrigger, //defaultnya "Delete"
  deleteTitle, //defaultnya "Confirmation Delete"
  deleteDescription, //defaultnya "Are you agree to delete the data?"
  deleteWarning, //deafaultnya "Delete data will affect to other related data"
  deleteOnConfirm, //action onconfirm delete
  deleteIsLoadingConfirm, //isLoadingConfirm delete
  layout,
  setLayout,
  selectedCustomHeader,
  startContent,
  customSelectedAction,
  deleteVariantTrigger,
  deleteTextConfirm,
  hideWarning,
  isPagination = true,
  isSearch = true,
  ...props
}: HeaderProps<T>) => {
  return (
    <header className="sticky top-[var(--header-height)] z-10 flex items-center justify-between gap-2 border-b bg-background p-4">
      <div className="flex items-center gap-2">
        {startContent}
        {isStartContent && <StartContentHeader layout={layout} setLayout={setLayout} />}
        <h2 className="text-2xl font-bold">{title}</h2>
        {customComponent}
      </div>

      {isSearch && <SearchHeader {...props} />}

      {props.withListActions ? (
        <ListActionHeader<T> selectedData={selectedData} dropdownItem={dropdownItem} {...props} />
      ) : Array.isArray(selectedData) && selectedData.length > 0 ? (
        selectedCustomHeader ? (
          selectedCustomHeader
        ) : (
          <SelectedActionHeader
            dropdownItem={selectedDropdownItem || []}
            customDropdownTrigger={selectedCustomDropdownTrigger}
            deleteTextTrigger={deleteTextTrigger}
            deleteTitle={deleteTitle}
            deleteDescription={deleteDescription}
            deleteWarning={deleteWarning}
            deleteIsLoadingConfirm={deleteIsLoadingConfirm}
            deleteOnConfirm={deleteOnConfirm}
            customSelectedAction={customSelectedAction}
            deleteVariantTrigger={deleteVariantTrigger}
            deleteTextConfirm={deleteTextConfirm}
            hideWarning={hideWarning}
          />
        )
      ) : (
        <AddActionHeader
          metaList={metaList}
          setPageList={setPageList}
          dropdownItem={dropdownItem}
          customDropdownTrigger={customDropdownTrigger}
          customButton={customButton}
          isPagination={isPagination}
        />
      )}
    </header>
  )
}

export default CustomHeader
