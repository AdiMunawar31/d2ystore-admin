"use client"

import type { FC } from "react"
import { useMemo } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import type { NavSidebarInterface } from "@/lib/interfaces/nav"
import { cn } from "@/lib/utils"

const ButtonNav: FC<NavSidebarInterface> = ({ icon, name, link }) => {
  const pathname = usePathname()

  const isActive = useMemo(() => {
    const currentRootPath = pathname.split("/")[2]
    const linkRootPath = link?.split("/")[2]

    return currentRootPath === linkRootPath
  }, [pathname, link])

  const isLink = !!link
  return (
    <Button
      asChild={isLink}
      variant="default"
      className={cn(
        `relative w-full justify-start font-normal text-neutral-grey-600-body-text hover:bg-neutral-grey-200-bg hover:text-primary hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:z-10 hover:before:h-4 hover:before:w-[3px] hover:before:-translate-y-1/2 hover:before:rounded hover:before:bg-primary`,
        isActive &&
          "bg-neutral-grey-200-bg text-primary before:absolute before:left-0 before:top-1/2 before:z-10 before:h-4 before:w-[3px] before:-translate-y-1/2 before:rounded before:bg-primary"
      )}
    >
      {isLink ? (
        <Link href={link}>
          {icon}
          {name}
        </Link>
      ) : (
        <>
          {icon}
          {name}
        </>
      )}
    </Button>
  )
}

const NavSidebar: FC<NavSidebarInterface> = ({ name, children }) => {
  return (
    <AccordionItem value={name} className="border-none">
      <AccordionTrigger className="justify-normal py-2 font-bold hover:no-underline" removeIcon>
        <ChevronDown size={20} aria-hidden />
        <h5 className="ml-2 flex items-center text-sm font-medium">{name}</h5>
      </AccordionTrigger>

      <AccordionContent asChild>
        <ul className="space-y-2 py-2">
          {children
            ?.filter((child) => child?.remote_config_code === undefined)
            ?.map((child, index) => (
              <li key={index}>
                <ButtonNav {...child} />
              </li>
            ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}

export default NavSidebar
