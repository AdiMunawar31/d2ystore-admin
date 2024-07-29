import React, { useEffect, useState, useCallback } from "react"
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from "date-fns"
import DatePicker from "@/components/custom/DatePicker"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { SelectedFilters } from ".."

type DateRangeProps = {
  title: string
  selectedFilters: SelectedFilters[]
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters[]>>
}

enum ListDate {
  Week = "Last 7 Days",
  Month = "This Month",
  Year = "This Year",
  Custom = "Custom (DD/MM/YY - DD/MM/YY)",
}

const listDate = [
  { value: ListDate.Week, label: "" },
  { value: ListDate.Month, label: "" },
  { value: ListDate.Year, label: "" },
  { value: ListDate.Custom, label: "" },
]

const DateRange = ({ title, selectedFilters, setSelectedFilters }: DateRangeProps) => {
  const selectedDate = selectedFilters.find((sl) => sl.title === title)
  const [selectedRadio, setSelectedRadio] = useState(
    selectedFilters.find((filter) => filter.title === title)?.radio?.value || ""
  )

  const formatDateRange = (formatStyle: string, from?: Date, to?: Date): string => {
    if (from && to) {
      return `${format(from, formatStyle)} - ${format(to, formatStyle)}`
    }
    return ""
  }

  const handleDateSelection = useCallback(
    (value: ListDate) => {
      let fromDate: Date | undefined
      let toDate: Date | undefined

      if (value === ListDate.Week) {
        fromDate = startOfWeek(new Date(), { weekStartsOn: 1 })
        toDate = endOfWeek(new Date(), { weekStartsOn: 1 })
      } else if (value === ListDate.Month) {
        fromDate = startOfMonth(new Date())
        toDate = endOfMonth(new Date())
      } else if (value === ListDate.Year) {
        fromDate = startOfYear(new Date())
        toDate = endOfYear(new Date())
      }

      setSelectedFilters((prev) => {
        return prev.map((i) => {
          if (i.title === title) {
            return {
              ...i,
              date: {
                start_date: fromDate,
                end_date: toDate,
                value: value,
                label: formatDateRange("dd-MM-yyyy", fromDate, toDate),
              },
            }
          }
          return i
        })
      })
    },
    [setSelectedFilters, title]
  )

  useEffect(() => {
    if (selectedRadio !== ListDate.Custom) {
      handleDateSelection(selectedRadio as ListDate)
    }
  }, [selectedRadio, handleDateSelection])

  useEffect(() => {
    setSelectedFilters((prev) => {
      return prev.map((i) => {
        if (i.title === title) {
          return {
            ...i,
            radio: listDate.find((item) => item.value === selectedRadio) || null,
          }
        }
        return i
      })
    })
  }, [selectedRadio, setSelectedFilters, title])

  return (
    <div className="grid gap-2">
      <RadioGroup
        value={selectedRadio}
        onValueChange={(value) => {
          setSelectedRadio(value as ListDate)
          if (value === ListDate.Custom) {
            setSelectedFilters((prev) => {
              return prev.map((i) => {
                if (i.title === title) {
                  return {
                    ...i,
                    date: {
                      start_date: undefined,
                      end_date: undefined,
                      value: ListDate.Custom,
                      label: "",
                    },
                  }
                }
                return i
              })
            })
          }
        }}
      >
        <ul className="space-y-4">
          {listDate.map((item, index) => (
            <li key={index} className="my-1">
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor={item.value} className="grow text-foreground">
                  {item.value}
                </Label>
                <RadioGroupItem id={item.value} value={item.value} />
              </div>
            </li>
          ))}
        </ul>
      </RadioGroup>

      {selectedRadio === ListDate.Custom && (
        <div className="my-2">
          <DatePicker
            mode="range"
            selected={{ from: selectedDate?.date?.start_date, to: selectedDate?.date?.end_date }}
            onSelect={(e) => {
              setSelectedFilters((prev) => {
                return prev.map((i) => {
                  if (i.title === title) {
                    return {
                      ...i,
                      date: {
                        start_date: e?.from,
                        end_date: e?.to,
                        value: ListDate.Custom,
                        label: formatDateRange("dd-MM-yyyy", e?.from, e?.to),
                      },
                    }
                  }
                  return i
                })
              })
            }}
            formatDisplay="dd/MM/yyyy"
          />
        </div>
      )}
    </div>
  )
}

export default DateRange
