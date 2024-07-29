import { useState } from "react"
import { format, addMonths, startOfYear } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CalendarMonthProps = {
  selected?: Date
  onSelect: (value: Date) => void
}

const generateMonths = () => {
  const start = startOfYear(new Date())
  return Array.from({ length: 12 }, (_, i) => format(addMonths(start, i), "MMM"))
}

const CalendarMonth = ({ selected, onSelect }: CalendarMonthProps) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const months = generateMonths()

  const handleYearChange = (direction: number) => {
    setSelectedYear((prevYear) => prevYear + direction)
  }

  const isMonthDisabled = (index: number) => {
    return selectedYear === currentYear && index < currentMonth
  }

  const handleSelectMonth = (index: number) => {
    onSelect(new Date(selectedYear, index))
  }

  return (
    <div className="p-4">
      <section>
        <div className="flex flex-row items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => handleYearChange(-1)}
            disabled={selectedYear <= currentYear}
            className="p-2 text-primary"
          >
            <ChevronLeft size={24} />
          </Button>

          <p className="whitespace-nowrap text-sm font-bold">
            <span>{selectedYear}</span>
          </p>

          <Button variant="ghost" onClick={() => handleYearChange(1)} className="p-2 text-primary">
            <ChevronRight size={24} />
          </Button>
        </div>
      </section>
      <div className="mt-4 grid grid-cols-3 gap-1">
        {months.map((month, index) => (
          <button
            disabled={isMonthDisabled(index)}
            key={month}
            onClick={() => handleSelectMonth(index)}
            className={`relative rounded px-8 py-2 text-center text-sm font-normal focus-within:relative focus-within:z-20 ${
              selected && selected.getMonth() === index && selected.getFullYear() === selectedYear
                ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                : cn(buttonVariants({ variant: "ghost" }), "bg-transparent hover:opacity-100")
            } ${isMonthDisabled(index) && "text-muted-foreground opacity-50"}`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CalendarMonth
