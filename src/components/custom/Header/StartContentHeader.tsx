"use client"

import type { Dispatch, SetStateAction } from "react"
import { LayoutGrid, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

type StartContentProps = {
  layout?: "table" | "grid"
  setLayout?: Dispatch<SetStateAction<"table" | "grid">>
}

const StartContentHeader = ({ layout, setLayout }: StartContentProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex flex-row items-center gap-2">
        <Button
          variant={layout === "table" ? "outline-primary" : "default"}
          size="icon"
          onClick={() => setLayout && setLayout("table")}
        >
          <Menu size={20} />
        </Button>

        <Button
          variant={layout !== "grid" ? "default" : "outline-primary"}
          size="icon"
          onClick={() => setLayout && setLayout("grid")}
        >
          <LayoutGrid size={20} />
        </Button>
      </div>
    </div>
  )
}

export default StartContentHeader
