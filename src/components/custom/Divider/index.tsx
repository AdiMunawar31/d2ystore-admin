import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const style = cva("border-t", {
  variants: {
    variant: {
      solid: "border-gray-200",
      dashed: "border-dashed border-gray-200",
      dotted: "border-dotted border-gray-200",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
})

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: "solid" | "dashed" | "dotted"
}

const Divider = ({ variant, className, ...props }: DividerProps) => {
  return <hr className={cn(style({ variant }), className)} {...props} />
}

export default Divider
