import { useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const NavHeader = ({ label, link }: { label: string; link: string }) => {
  const pathname = usePathname()

  const isLinkActive = useMemo(() => {
    return `/${pathname.split("/")[1]}` === link
  }, [link, pathname])

  return (
    <Link
      href={link}
      className={cn(
        "flex h-[var(--header-height)] items-center justify-center border-b-2 border-transparent px-3 text-center text-sm text-neutral-grey-600-body-text transition-all hover:text-primary",
        isLinkActive && "border-primary font-bold text-primary"
      )}
    >
      <span>{label}</span>
    </Link>
  )
}

export default NavHeader
