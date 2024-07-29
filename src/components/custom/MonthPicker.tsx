"use client"

import type { FC, ReactNode } from "react"
import { useMemo } from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalendarMonth from "../ui/calendar-month"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"

export type MonthPickerProps = {
  selected?: Date
  onSelect: (value: Date) => void
  customDisplay?: string | ReactNode
}

const MonthPicker: FC<MonthPickerProps> = ({ selected, onSelect, customDisplay }) => {
  const valueDisplay = useMemo(() => {
    if (customDisplay) return customDisplay
  }, [customDisplay])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="group w-full justify-between px-3 py-2 text-left font-normal focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-grey-200-bg disabled:text-placeholder disabled:opacity-100"
        >
          <span className="line-clamp-1 group-hover:text-accent-foreground">{valueDisplay}</span>
          <CalendarIcon className="h-4 w-4 text-placeholder group-hover:text-accent-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-auto p-0">
        <CalendarMonth selected={selected} onSelect={onSelect} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MonthPicker
