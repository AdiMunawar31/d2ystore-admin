"use client"

import type { ReactNode } from "react"
import CustomAlertDialog from "@/components/custom/dialog/CustomAlertDialog"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type ListActionSelected = {
  label: ReactNode
  customComponent?: ReactNode
} & (ListActionSelectedButton | ListActionSelectedDropdown) &
  Omit<ButtonProps, "type">

type ListActionSelectedButton = {
  type?: "button"
}

type ListActionSelectedDropdown = {
  type?: "dropdown"
  options: {
    label?: string
    onClick?: () => void
  }[]
}

export type SelectedListActionProps<T> = {
  selectedData?: T[]
  listActionsSelected?: ListActionSelected[]
  removeDelete?: boolean
  textTriggerDelete?: string
  titleDelete?: string
  descriptionDelete?: string
  warningDelete?: string
  isLoadingConfirmDelete?: boolean
  hideDelete?: boolean
  onConfirmDelete?: (selectedData: T[]) => void | Promise<void>
}

// eslint-disable-next-line @typescript-eslint/ban-types
const SelectedListAction = <T extends {}>({
  selectedData,
  listActionsSelected,
  textTriggerDelete,
  titleDelete,
  descriptionDelete,
  warningDelete,
  isLoadingConfirmDelete,
  hideDelete,
  onConfirmDelete,
}: SelectedListActionProps<T>) => {
  return (
    <div className="flex gap-2">
      {!hideDelete && (
        <CustomAlertDialog
          textTrigger={textTriggerDelete ?? "Delete"}
          title={titleDelete ?? "Confirmation Delete"}
          description={descriptionDelete ?? "Are you agree to delete the data?"}
          warning={warningDelete ?? "Delete data will affect to other related data"}
          isLoadingConfirm={isLoadingConfirmDelete}
          onConfirm={() => onConfirmDelete && onConfirmDelete(selectedData || [])}
        />
      )}

      {listActionsSelected?.map((item, index) => {
        const { type, ...rest } = item

        if (item?.customComponent) {
          return item.customComponent
        }

        if (type === "dropdown") {
          return (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button {...rest}>{item.label}</Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {item.options.map((item, idx) => {
                  return (
                    <DropdownMenuItem key={idx} onClick={item?.onClick} className="cursor-pointer justify-end">
                      {item.label}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }

        return (
          <Button key={index} {...rest}>
            {item.label}
          </Button>
        )
      })}
    </div>
  )
}

export default SelectedListAction
