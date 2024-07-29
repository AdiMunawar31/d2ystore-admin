import { useState } from "react"
import type { CellContext } from "@tanstack/react-table"
import { CheckboxStar } from "@/components/custom/CheckboxStar"
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"

type StarProductsPIProps = object & CellContext<ProductsPIInterface, unknown>

const StarProductsPI = ({ row }: StarProductsPIProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = row.original

  const [selected, setSelected] = useState(false)

  return <CheckboxStar checked={selected} onCheckedChange={(value) => setSelected(!!value)} />
}

export default StarProductsPI
