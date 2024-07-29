"use client"

import type { FC } from "react"
import Logo from "@/components/icons/Logo"
import AccountHeader from "./AccountHeader"
import SearchHeader from "./SearchHeader"

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[var(--header-height)] items-center justify-between border-b bg-background">
      <section className="w-[var(--sidebar-width)] p-4">
        <figure className="h-fit w-fit">
          <Logo height={24} />
        </figure>
      </section>

      <section className="px-4">
        <div className="flex items-center gap-4">
          <SearchHeader />

          <AccountHeader />
        </div>
      </section>
    </header>
  )
}

export default Header
