"use client"

import type { FC } from "react"
import ReactColorPicker from "react-pick-color"
import type { ColorPickerProps as ReactColorPickerProps } from "react-pick-color/build/components/ColorPicker/ColorPicker"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"

export type ColorPickerProps = {
  placeholder?: string
  triggerClassName?: string
  disabled?: boolean
  removeArrow?: boolean
} & ReactColorPickerProps

const ColorPicker: FC<ColorPickerProps> = ({ placeholder, triggerClassName, removeArrow, disabled, ...props }) => {
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
          {props.color ? (
            <div className="flex items-center gap-2 group-hover:text-accent-foreground">
              <span style={{ backgroundColor: props.color.toString() }} className="h-7 w-7 rounded-full border" />
              <span className="uppercase">{props.color.toString()}</span>
            </div>
          ) : (
            <span className="line-clamp-1 text-placeholder group-hover:text-accent-foreground">
              {placeholder ? placeholder : "Pick a color"}
            </span>
          )}

          {!removeArrow
            ? !disabled && (
                <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-placeholder group-hover:text-accent-foreground" />
              )
            : null}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-auto rounded border-none p-0">
        <ReactColorPicker
          theme={{
            inputBackground: "var(--background)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
            background: "var(--background)",
          }}
          presets={["#fff", "#000", "#ff0000", "#00ff00", "#0000ff"]}
          combinations={["monochromatic"]}
          className="w-[400px] max-w-[100vw]"
          {...props}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ColorPicker
