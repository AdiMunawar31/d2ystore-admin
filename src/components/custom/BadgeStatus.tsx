import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type BadgeStatusProps = {
  type?: "default" | "primary" | "success" | "warning" | "destructive"
  children?: ReactNode
}

const BadgeStatus = ({ type = "default", children }: BadgeStatusProps) => {
  return (
    <span
      className={cn(
        "rounded-full px-4 py-2 text-xs font-medium capitalize",
        type === "default" && "bg-neutral-grey-200-bg text-neutral-grey-600-body-text",
        type === "primary" && "bg-accent text-accent-foreground",
        type === "success" && "bg-success-lightest text-success-lightest-foreground",
        type === "destructive" && "bg-destructive-lightest text-destructive-lightest-foreground",
        type === "warning" && "bg-warning-lightest text-warning-lightest-foreground"
      )}
    >
      {children}
    </span>
  )
}

export default BadgeStatus
