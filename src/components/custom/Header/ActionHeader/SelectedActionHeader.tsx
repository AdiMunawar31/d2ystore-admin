"use client"

import type { ReactNode } from "react"
import { MoreVertical } from "lucide-react"
import CustomAlertDialog from "@/components/custom/dialog/CustomAlertDialog"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { DropdownOptionInterface } from "@/lib/interfaces/component"

type SelectedActionHeaderProps = {
  dropdownItem?: DropdownOptionInterface[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customDropdownTrigger?: any
  deleteTextTrigger?: string
  deleteTitle?: string
  deleteDescription?: string
  deleteWarning?: string
  deleteOnConfirm?: () => void | Promise<void>
  deleteIsLoadingConfirm?: boolean
  customSelectedAction?: ReactNode
  deleteVariantTrigger?: ButtonProps["variant"]
  deleteTextConfirm?: string
  hideWarning?: boolean
}

const SelectedActionHeader = ({
  dropdownItem,
  customDropdownTrigger,
  deleteTextTrigger,
  deleteTitle,
  deleteDescription,
  deleteWarning,
  deleteOnConfirm,
  deleteIsLoadingConfirm,
  customSelectedAction,
  deleteVariantTrigger,
  deleteTextConfirm,
  hideWarning,
}: SelectedActionHeaderProps) => {
  return (
    <div className="flex gap-2">
      {customSelectedAction ?? (
        <CustomAlertDialog
          textTrigger={deleteTextTrigger ?? "Delete"}
          title={deleteTitle ?? "Confirmation Delete"}
          description={deleteDescription ?? "Are you agree to delete the data?"}
          warning={deleteWarning ?? "Delete data will affect to other related data"}
          isLoadingConfirm={deleteIsLoadingConfirm}
          onConfirm={deleteOnConfirm}
          variantTrigger={deleteVariantTrigger ?? "outline-destructive"}
          textConfirm={deleteTextConfirm ?? "Cancel"}
          hideWarning={hideWarning}
        />
      )}

      {Array.isArray(dropdownItem) && dropdownItem.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline-primary" className="p-2">
              {customDropdownTrigger ? customDropdownTrigger : <MoreVertical />}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {dropdownItem.map((item, idx) => {
              return (
                <DropdownMenuItem key={idx} onClick={item?.onClick} className="cursor-pointer justify-end">
                  {item.name}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

export default SelectedActionHeader
