import type { FC } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const SelectDateActionHeader: FC = () => {
  return (
    <div className="flex flex-row items-center text-[#27AAE1]">
      <Button variant="ghost" onClick={() => {}} className="p-2 text-primary" disabled={false}>
        <ChevronLeft size={24} />
      </Button>
      <p className="text-nowrap text-sm">Sun,1 Mar</p>
      <Button variant="ghost" onClick={() => {}} className="p-2 text-primary" disabled={false}>
        <ChevronRight size={24} />
      </Button>
    </div>
  )
}

export default SelectDateActionHeader
