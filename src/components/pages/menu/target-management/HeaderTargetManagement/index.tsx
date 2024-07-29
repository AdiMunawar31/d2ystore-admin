"use client"

import ActionHeaderTargetManagement from "./ActionHeaderTargetManagement"
import SearchHeaderTargetManagement from "./SearchHeaderTargetManagement"

const HeaderTargetManagement = () => {
  return (
    <header className="sticky top-[var(--header-height)] z-10 flex items-center justify-between gap-2 border-b bg-background p-4">
      <h2 className="text-2xl font-bold">Target Management</h2>
      <SearchHeaderTargetManagement />
      <ActionHeaderTargetManagement />
    </header>
  )
}

export default HeaderTargetManagement
