import type { DropdownOptionInterface } from "@/lib/interfaces/component"
import type { DefaultListActionProps } from "./DefaultListAction"
import DefaultListAction from "./DefaultListAction"
import type { SelectedListActionProps } from "./SelectedListAction"
import SelectedListAction from "./SelectedListAction"

type WithListAction<T> = {
  withListActions: true
} & DefaultListActionProps &
  SelectedListActionProps<T>

type NoWithListAction = {
  withListActions?: false
}

export type ListActionHeaderProps<T> = {
  selectedData?: T[]
  withListActions?: boolean
  dropdownItem?: DropdownOptionInterface[]
} & (WithListAction<T> | NoWithListAction)

// eslint-disable-next-line @typescript-eslint/ban-types
const ListActionHeader = <T extends {}>({ selectedData, withListActions, ...props }: ListActionHeaderProps<T>) => {
  if (!withListActions) return null

  return Array.isArray(selectedData) && selectedData.length > 0 ? (
    <SelectedListAction selectedData={selectedData} {...props} />
  ) : (
    <DefaultListAction {...props} />
  )
}

export default ListActionHeader
