"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"
import Star from "../icons/Star"

const CheckboxStar = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }) => (
  <CheckboxPrimitive.Root
    className={cn(
      "peer shrink-0 text-neutral-grey-300-disable-btn disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-warning",
      className
    )}
    {...props}
  >
    <Star width={20} height={20} />
  </CheckboxPrimitive.Root>
))
CheckboxStar.displayName = CheckboxPrimitive.Root.displayName

export { CheckboxStar }
