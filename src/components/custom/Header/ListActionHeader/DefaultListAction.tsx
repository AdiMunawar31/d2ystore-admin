"use client"

import type { ReactNode } from "react"
import { MoreVertical } from "lucide-react"
import Pagination from "@/components/custom/Pagination"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { DropdownOptionInterface } from "@/lib/interfaces/component"

type ListAction = {
  label: ReactNode
} & (ListActionButton | ListActionDropdown) &
  Omit<ButtonProps, "type">

type ListActionButton = {
  type?: "button"
}

type ListActionDropdown = {
  type?: "dropdown"
  options: {
    label?: string
    onClick?: () => void
  }[]
}

export type DefaultListActionProps = {
  listActions?: ListAction[]
  metaApi?: MetaApiResponseInterface
  onPageMetaApiChange?: (page: number) => void
  dropdownItem?: DropdownOptionInterface[]
}

const DefaultListAction = ({ listActions, metaApi, onPageMetaApiChange, dropdownItem }: DefaultListActionProps) => {
  return (
    <div className="flex items-center gap-2">
      <Pagination
        currentPage={metaApi?.page || 0}
        itemsPerPage={metaApi?.limit || 0}
        totalItems={metaApi?.total || 0}
        onPrev={() => onPageMetaApiChange && onPageMetaApiChange((metaApi?.page || 0) - 1)}
        onNext={() => onPageMetaApiChange && onPageMetaApiChange((metaApi?.page || 0) + 1)}
      />

      {listActions?.map((item, index) => {
        const { type, ...rest } = item

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

      {Boolean(dropdownItem?.length) && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline-primary" className="p-2">
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {dropdownItem?.map((item, idx) => {
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

export default DefaultListAction
