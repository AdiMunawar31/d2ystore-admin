import type { FC, ReactNode } from "react"
import type { NavSidebarInterface } from "@/lib/interfaces/nav"
import AccordionSidebar from "./AccordionSidebar"

type SidebarProps = {
  title: string
  navItems: NavSidebarInterface[]
  children: ReactNode
}

const Sidebar: FC<SidebarProps> = ({ title, navItems, children }) => {
  return (
    <div className="flex min-h-[calc(100vh-var(--header-height))]">
      <aside className="sticky top-[var(--header-height)] z-50 h-[calc(100vh-var(--header-height))] w-[var(--sidebar-width)] overflow-y-auto border-r p-4">
        <h1 className="mb-2 p-2 text-3xl font-bold">{title}</h1>
        <AccordionSidebar navItems={navItems} />
      </aside>

      <main className="flex w-full max-w-[calc(100vw-var(--sidebar-width))] flex-col">{children}</main>
    </div>
  )
}

export default Sidebar
