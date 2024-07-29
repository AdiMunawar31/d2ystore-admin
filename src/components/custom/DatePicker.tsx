"use client"

import type { FC, ReactNode } from "react"
import { useMemo } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CalendarProps } from "@/components/ui/calendar"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"

export type DatePickerProps = {
  placeholder?: string
  triggerClassName?: string
  disabled?: boolean
  customDisplay?: string | ReactNode
  formatDisplay?: string
} & CalendarProps

const DatePicker: FC<DatePickerProps> = ({
  placeholder,
  triggerClassName,
  disabled,
  customDisplay,
  formatDisplay = "PPP",
  ...props
}) => {
  const valueDisplay = useMemo(() => {
    if (customDisplay) return customDisplay

    if (!props.selected) return null

    if (props.mode === "single") {
      return format(props.selected, formatDisplay)
    }

    if (props.mode === "range") {
      if (props.selected.from) {
        if (!props.selected.to) {
          return `${format(props.selected.from, formatDisplay)}`
        } else {
          return `${format(props.selected.from, formatDisplay)} - ${format(props.selected.to, formatDisplay)}`
        }
      } else {
        return "Pick a date"
      }
    }

    if (props.mode === "multiple") {
      return `You selected ${props.selected.length} day(s).`
    }

    return "You selected date."
  }, [props.selected, props.mode, customDisplay, formatDisplay])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "group w-full justify-between px-3 py-2 text-left font-normal focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-grey-200-bg disabled:text-placeholder disabled:opacity-100",
            triggerClassName
          )}
          disabled={disabled}
        >
          {valueDisplay ? (
            <span className="line-clamp-1 group-hover:text-accent-foreground">{valueDisplay}</span>
          ) : (
            <span className="line-clamp-1 text-placeholder group-hover:text-accent-foreground">
              {placeholder ? placeholder : "Pick a date"}
            </span>
          )}
          <CalendarIcon className="h-4 w-4 text-placeholder group-hover:text-accent-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-auto p-0">
        <Calendar {...props} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DatePicker
