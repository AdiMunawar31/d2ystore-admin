import type { HTMLAttributes, ReactNode } from "react"
import { cva } from "class-variance-authority"
import { AlertOctagon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlertProps extends HTMLAttributes<HTMLSpanElement> {
  message: string | ReactNode
  action?: ReactNode
  variant?: "success" | "info" | "warning" | "error"
}

const ICONS = {
  success: <CheckCircle size={24} className="text-green-500" />,
  info: <AlertOctagon size={24} className="text-blue-500" />,
  warning: <AlertOctagon size={24} className="text-orange-500" />,
  error: <AlertOctagon size={24} className="text-red-500" />,
}

const style = cva("flex items-center justify-between p-4 rounded-lg text-neutral-900 ", {
  variants: {
    variant: {
      success: "bg-green-100",
      info: "bg-blue-100",
      warning: "bg-orange-100",
      error: "bg-red-100",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const Alert = ({ variant = "info", message, className, action, ...props }: AlertProps) => {
  return (
    <span className={cn(style({ variant }), className)} {...props}>
      <div className="flex items-start gap-2">
        {ICONS[variant]}
        <p className="text-warp">{message}</p>
      </div>
      {action}
    </span>
  )
}

export default Alert
