"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"
import BaseUomBPU from "./BaseUomBPU"
import PurchaseUomBPU from "./PurchaseUomBPU"
import UoMLeveling from "./UoMLeveling"

const BasePriceUoM = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()
  const [displayValueCost, setDisplayValueCost] = useState("")
  const [displayValueBest, setDisplayValueBest] = useState("")

  useEffect(() => {
    if (basicInfo.cost !== undefined) {
      setDisplayValueCost(basicInfo.cost.toLocaleString())
    } else {
      setDisplayValueCost("")
    }

    if (basicInfo.base_price !== undefined) {
      setDisplayValueBest(basicInfo.base_price.toLocaleString())
    } else {
      setDisplayValueBest("")
    }
  }, [basicInfo.base_price, basicInfo.cost])

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Base Price & UoM</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="block">
          <Label htmlFor="cost-base-price">Cost</Label>
          <Input
            id="cost-base-price"
            type="text"
            startContent={
              <div className="flex h-full items-center justify-center border-r px-3">
                <span>Rp</span>
              </div>
            }
            value={displayValueCost}
            onChange={(e) => {
              const value = e.target.value
              const numericValue = value.replace(/[^0-9]/g, "")
              setDisplayValueCost(value.replace(/[^0-9.,]/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
              setBasicInfo((prev) => ({
                ...prev,
                cost: numericValue !== "" ? Number(numericValue) : undefined,
              }))
            }}
            placeholder="0"
            wrapClassName="w-full"
          />
        </div>

        <div className="block">
          <Label htmlFor="base-price">Base Price</Label>
          <Input
            id="base-price"
            type="text"
            startContent={
              <div className="flex h-full items-center justify-center border-r px-3">
                <span>Rp</span>
              </div>
            }
            value={displayValueBest}
            onChange={(e) => {
              const value = e.target.value
              const numericValue = value.replace(/[^0-9]/g, "")
              setDisplayValueBest(value.replace(/[^0-9.,]/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
              setBasicInfo((prev) => ({
                ...prev,
                base_price: numericValue !== "" ? Number(numericValue) : undefined,
              }))
            }}
            placeholder="0"
            wrapClassName="w-full"
          />
        </div>

        <PurchaseUomBPU />
        <BaseUomBPU />
      </div>

      <UoMLeveling />
    </section>
  )
}

export default BasePriceUoM
