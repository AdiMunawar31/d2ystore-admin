import { useState } from "react"
import { Info } from "lucide-react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"

type CustomAlertDialogProps = {
  textTrigger?: string
  variantTrigger?: ButtonProps["variant"]
  variantConfirm?: ButtonProps["variant"]
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description?: any
  warning?: string

  onCancel?: () => void | Promise<void>
  onConfirm?: () => void | Promise<void>
  isLoadingCancel?: boolean
  isLoadingConfirm?: boolean
  isDisableCancel?: boolean
  isDisableConfirm?: boolean

  textConfirm?: string
  textCancel?: string
  hideDialogTrigger?: boolean
  openDialog?: boolean
  setOpenDialog?: (open: boolean) => void
  disabledTrigger?: boolean
  hideWarning?: boolean
}

const CustomAlertDialog = ({
  variantTrigger,
  variantConfirm,
  textTrigger,
  title,
  description,
  warning,

  onCancel,
  onConfirm,
  isLoadingCancel,
  isLoadingConfirm,
  isDisableCancel,
  isDisableConfirm,

  textConfirm,
  textCancel,
  hideDialogTrigger = false,
  openDialog,
  setOpenDialog,
  disabledTrigger = false,
  hideWarning = false,
}: CustomAlertDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={openDialog ? openDialog : open} onOpenChange={setOpenDialog ? setOpenDialog : setOpen}>
      {!hideDialogTrigger && (
        <AlertDialogTrigger asChild>
          <Button variant={variantTrigger ?? "outline-destructive"} disabled={disabledTrigger}>
            {textTrigger ?? "Show"}
          </Button>
        </AlertDialogTrigger>
      )}

      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}

          <div className="flex flex-col space-y-4 p-4">
            {!hideWarning && warning && (
              <p className="flex items-center gap-2 rounded-sm bg-warning-lightest p-4 text-warning-lightest-foreground">
                <Info />
                <span className="text-center text-sm">{warning}</span>
              </p>
            )}

            {description && <div className="text-sm text-neutral-grey-600-body-text">{description}</div>}
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button
            variant={"outline-primary"}
            onClick={async () => {
              if (onCancel) {
                await onCancel()
              }

              setOpenDialog ? setOpenDialog(false) : setOpen(false)
            }}
            className="mt-2 sm:mt-0"
            disabled={isDisableCancel || isLoadingCancel}
            isLoading={isLoadingCancel}
          >
            {textCancel ?? "Cancel"}
          </Button>

          <Button
            variant={variantConfirm || "primary"}
            onClick={async () => {
              if (onConfirm) {
                await onConfirm()
              }

              setOpenDialog ? setOpenDialog(false) : setOpen(false)
            }}
            className="min-w-24"
            disabled={isDisableConfirm || isLoadingConfirm}
            isLoading={isLoadingConfirm}
          >
            {textConfirm ?? "Confirm"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomAlertDialog
