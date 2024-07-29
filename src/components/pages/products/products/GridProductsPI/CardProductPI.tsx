"use client"

import { useMemo } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useProductsPIContext } from "@/providers/products/products/ProductsPIProvider"

const CardProductPI = ({ data }: { data: ProductsPIInterface }) => {
  const { selectedProducts, setSelectedProducts } = useProductsPIContext()

  const isSelected = useMemo(() => {
    return selectedProducts.some((item: any) => item.id === data.id)
  }, [selectedProducts, data])

  return (
    <Card className="flex flex-col gap-1 p-4">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-xs text-gray-800">{data.product_category.name}</h2>

        <Checkbox
          id="select-all"
          className="border-gray-300"
          onCheckedChange={(checked) => {
            if (checked) {
              setSelectedProducts((prev) => [...prev, data])
            } else {
              setSelectedProducts((prev) => prev.filter((item) => item.id !== data.id))
            }
          }}
          checked={isSelected}
        />
      </div>

      <h2 className="font-bold">{data.name}</h2>

      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-grey-600-body-text">{data.code}</p>

        <Button asChild variant={"ghost-primary"} size="sm" className="h-fit gap-1 p-0 text-xs hover:bg-transparent">
          <Link href={`/inventory/product/products/${encodeURIComponent(data.id)}`}>
            Detail
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </Card>
  )
}

export default CardProductPI
