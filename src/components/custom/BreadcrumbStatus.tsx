import type { FC } from "react"
import { cn } from "@/lib/utils"

type BreadcrumbStatusProps = {
  data: string[]
  currentStatus?: string
  activeColors: {
    [key: string]: {
      foreground: string
      background: string
    }
  }
  wrapClassName?: string
}

const BreadcrumbStatus: FC<BreadcrumbStatusProps> = ({ data, currentStatus, activeColors, wrapClassName }) => {
  return (
    <ul className={cn("inline-flex", wrapClassName)}>
      {data.map((status, index) => {
        const isActive = status === currentStatus

        return (
          <li
            key={index}
            style={{
              backgroundColor: isActive ? activeColors[status]?.background || "var(--background)" : "var(--background)",
              color: isActive
                ? activeColors[status]?.foreground || "var(--neutral-grey-500-disable-text)"
                : "var(--neutral-grey-500-disable-text)",
              borderColor: isActive ? activeColors[status]?.foreground || "var(--border)" : "var(--border)",
            }}
            className="group relative h-10 border-y px-4 after:absolute after:-right-4 after:z-10 after:h-[2.4rem] after:w-10 after:rounded-e-full after:border-r after:border-inherit after:bg-inherit first:rounded-s first:border-l last:rounded-e last:border-r last:pr-8 last:after:hidden"
          >
            <span className="invisible text-sm capitalize">{status}</span>

            <span className="absolute left-1/2 top-1/2 z-20 -translate-x-[30%] -translate-y-1/2 text-nowrap text-sm capitalize group-last:-translate-x-[45%]">
              {status}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default BreadcrumbStatus
