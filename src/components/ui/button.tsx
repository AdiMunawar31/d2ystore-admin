import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-9 rounded-md px-1",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      variant: {
        default: "hover:opacity-70 text-gray-500",
        primary:
          "bg-primary text-white hover:bg-primary/80 disabled:text-[#A7B8C9] disabled:bg-[#E3E8F5] disabled:opacity-100",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        "outline-primary": "border border-primary bg-background hover:bg-accent text-primary hover:bg-primary-lightest",
        "outline-success": "border border-success bg-background text-success hover:bg-success-lightest",
        "outline-destructive": "border border-destructive bg-background text-destructive hover:bg-destructive-lightest",
        outlineGray: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        "ghost-primary": "text-primary hover:text-primary hover:bg-primary-lightest",
        "ghost-destructive":
          "hover:bg-destructive-lightest hover:text-destructive-lightest-foreground text-destructive-lightest-foreground",
        "ghost-success":
          "hover:bg-success-lightest hover:text-success-lightest-foreground text-success-lightest-foreground",

        link: "text-primary underline-offset-4 hover:underline h-fit w-fit p-0",

        blue: "bg-main-blue text-white hover:opacity-70",
        disabled: "bg-[#E3E8F5] text-[#A7B8C9]",

        textBlue: "hover:opacity-70 text-main-blue",
        textPrimary: "hover:opacity-70 text-primary",
        outlineRed:
          "border border-input border-red-500 bg-background text-red-500 hover:bg-accent hover:text-accent-foreground",
        outlineGreen:
          "border border-input border-green-500 bg-background text-green-500 hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ size, variant, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin">
            <Loader2 size={20} />
          </span>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
