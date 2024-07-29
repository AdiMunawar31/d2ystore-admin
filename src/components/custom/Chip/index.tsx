import React from "react"
import type { ReactNode } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string | ReactNode
  color: "green" | "red" | "yellow" | "gray"
}

const style = cva("rounded-full px-4 py-2 text-xs font-medium", {
  variants: {
    color: {
      green: "bg-success-lightest text-success-lightest-foreground",
      red: "bg-destructive-lightest text-destructive-lightest-foreground",
      yellow: "bg-warning-lightest text-warning-lightest-foreground",
      gray: "bg-neutral-grey-200-bg text-neutral-grey-600-body-text",
    },
  },
  defaultVariants: {
    color: "gray",
  },
})

const Chip = ({ label, color, className, ...props }: ChipProps) => {
  return (
    <span className={cn(style({ color }), className)} {...props}>
      {label || "Unknown"}
    </span>
  )
}

export default Chip
