"use client"

import type { Dispatch, ReactNode, SetStateAction } from "react"
import { MoreVertical } from "lucide-react"
import Pagination from "@/components/custom/Pagination"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { MetaApiResponseInterface } from "@/lib/interfaces/api"
import type { DropdownOptionInterface } from "@/lib/interfaces/component"

type AddActionHeaderProps = {
  metaList?: MetaApiResponseInterface
  setPageList?: Dispatch<SetStateAction<number>>
  dropdownItem?: DropdownOptionInterface[]
  customDropdownTrigger?: ReactNode
  customButton?: ReactNode
  isPagination?: boolean
}

const AddActionHeader = ({
  metaList,
  setPageList,
  dropdownItem,
  customDropdownTrigger,
  customButton,
  isPagination,
}: AddActionHeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      {isPagination && (
        <Pagination
          currentPage={metaList?.page || 0}
          itemsPerPage={metaList?.limit || 0}
          totalItems={metaList?.total || 0}
          onPrev={() => setPageList && setPageList((prev) => prev - 1)}
          onNext={() => setPageList && setPageList((prev) => prev + 1)}
        />
      )}

      {customButton && (
        <Button variant="primary" asChild>
          {customButton}
        </Button>
      )}

      {Array.isArray(dropdownItem) && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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

export default AddActionHeader
