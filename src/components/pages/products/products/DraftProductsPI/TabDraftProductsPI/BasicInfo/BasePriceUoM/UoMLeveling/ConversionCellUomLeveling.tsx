import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import type { UomLevelsProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ConversionCellUomLeveling = ({ data }: { data: UomLevelsProductsPIInterface }) => {
  const { key, convertion } = data
  const { setBasicInfo } = useDraftProductsPIContext()
  const [displayValue, setDisplayValue] = useState("")

  useEffect(() => {
    if (convertion !== undefined) {
      setDisplayValue(convertion.toLocaleString())
    } else {
      setDisplayValue("")
    }
  }, [convertion])

  return (
    <Input
      type="text"
      value={displayValue}
      wrapClassName="border-none ring-0 focus-within:ring-0 bg-transparent"
      placeholder="000"
      onChange={(e) => {
        const value = e.target.value
        const numericValue = value.replace(/[^0-9]/g, "")
        setDisplayValue(value.replace(/[^0-9.,]/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
        setBasicInfo((prev) => ({
          ...prev,
          uom_levels: prev.uom_levels?.map((item) =>
            item.key === key ? { ...item, convertion: numericValue !== "" ? Number(numericValue) : undefined } : item
          ),
        }))
      }}
    />
  )
}

export default ConversionCellUomLeveling
