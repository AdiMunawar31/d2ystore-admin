import React, { useState } from "react"
import { Loader2 } from "lucide-react"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type CustomDialogProps = {
  textTrigger?: string
  variantTrigger?: ButtonProps["variant"]
  title?: string
  onCancel?: () => void | Promise<void>
  onConfirm?: () => void | Promise<void>
  disabled?: boolean
  isLoadingConfirm?: boolean
  textConfirm?: string
  textCancel?: string
  hideDialogTrigger?: boolean
  hideFooter?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
  wrapContentClassName?: string
  disabledSubmit?: boolean
}

const CustomDialog = ({
  variantTrigger,
  textTrigger,
  title,
  onCancel,
  onConfirm,
  isLoadingConfirm,
  textConfirm,
  textCancel,
  hideDialogTrigger,
  hideFooter,
  open,
  onOpenChange,
  disabled,
  children,
  wrapContentClassName,
  disabledSubmit = false,
}: CustomDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={open || openDialog} onOpenChange={onOpenChange || setOpenDialog}>
      {!hideDialogTrigger && (
        <DialogTrigger asChild>
          <Button variant={variantTrigger ?? "outline-destructive"} disabled={disabled}>
            {textTrigger ?? "Show"}
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className={cn("max-w-4xl", wrapContentClassName)}>
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}

        {children}

        {!hideFooter && (
          <DialogFooter>
            <Button
              variant={"outline-primary"}
              onClick={async () => {
                if (onCancel) await onCancel()

                setOpenDialog(false)
              }}
            >
              {textCancel ?? "Cancel"}
            </Button>

            <Button
              variant={"primary"}
              onClick={async () => {
                if (onConfirm) {
                  await onConfirm()
                }

                onOpenChange ? onOpenChange(false) : setOpenDialog(false)
              }}
              className="min-w-24"
              disabled={isLoadingConfirm || disabledSubmit}
            >
              {isLoadingConfirm ? (
                <span className="animate-spin">
                  <Loader2 size={20} />
                </span>
              ) : (
                (textConfirm ?? "Confirm")
              )}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog
