"use client"

import { useState } from "react"
import type { FieldPath, FieldValues } from "react-hook-form"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import type { ContentFormDialogProps } from "./ContentFormDialog"
import ContentFormDialog from "./ContentFormDialog"

type FormDialogProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  textTrigger?: string
  variantTrigger?: ButtonProps["variant"]
  wrapContentClassName?: string
  removeTrigger?: boolean
  open?: boolean
  onOpenChange?(open: boolean): void
} & ContentFormDialogProps<TFieldValues, TName>

// eslint-disable-next-line @typescript-eslint/ban-types
const FormDialog = <T extends {}>({
  variantTrigger,
  textTrigger,
  wrapContentClassName,
  ...props
}: FormDialogProps<T>) => {
  const [defaultOpen, setDefaultOpen] = useState(false)

  return (
    <Dialog open={props.open || defaultOpen} onOpenChange={props.onOpenChange || setDefaultOpen}>
      {!props.removeTrigger && (
        <DialogTrigger asChild>
          <Button variant={variantTrigger ?? "primary"}>{textTrigger ?? "Show"}</Button>
        </DialogTrigger>
      )}

      <DialogContent className={cn("max-w-4xl", wrapContentClassName)}>
        <ContentFormDialog setOpen={props.onOpenChange || setDefaultOpen} {...props} />
      </DialogContent>
    </Dialog>
  )
}

export default FormDialog
