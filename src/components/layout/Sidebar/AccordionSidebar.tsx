"use client"

import type { FC } from "react"
import { Accordion } from "@/components/ui/accordion"
import type { NavSidebarInterface } from "@/lib/interfaces/nav"
import NavSidebar from "./NavSidebar"

type SidebarProps = {
  navItems: NavSidebarInterface[]
}

const AccordionSidebar: FC<SidebarProps> = ({ navItems }) => {
  return (
    <Accordion type="multiple" value={navItems.map((nav: any) => nav.name)}>
      {navItems.map((nav: any, index: number) => (
        <NavSidebar key={index} {...nav} />
      ))}
    </Accordion>
  )
}

export default AccordionSidebar
