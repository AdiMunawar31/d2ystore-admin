"use client"

import type { FC } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const AccountHeader: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="mr-2 hidden text-right lg:block">
        <h2 className="whitespace-nowrap text-sm font-semibold">{"D2Y OFFICIAL"}</h2>
        <p className="text-xs text-gray-500 ">{"0812345678"}</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-11 w-11">
            <AvatarFallback>
              <Image
                src="https://ui-avatars.com/api/?name=D2Y+OFFICIAL&background=random"
                width={50}
                height={50}
                alt="avatar"
              />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {}}
            className="focus:bg-destructive/20 cursor-pointer text-destructive focus:text-destructive"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AccountHeader
