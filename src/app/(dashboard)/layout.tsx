import type { ReactNode } from "react"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import { navItemD2YStore } from "@/lib/data/nav-items"
import { AppProvider } from "@/providers/AppProvider"
import { QueryProvider } from "@/providers/QueryProvider"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <AppProvider>
        <Header />
        <Sidebar title="D2Ystore" navItems={navItemD2YStore}>
          {children}
        </Sidebar>
      </AppProvider>
    </QueryProvider>
  )
}
