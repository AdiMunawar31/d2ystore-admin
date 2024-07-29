import type { CellContext } from "@tanstack/react-table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"

type ActionProductsPIProps = object & CellContext<ProductsPIInterface, unknown>

const ActionProductsPI = ({ row }: ActionProductsPIProps) => {
  const data = row.original

  return (
    <Button variant="ghost-primary" asChild>
      <Link href={`/inventory/product/products/${encodeURIComponent(data.id)}`}>View Detail</Link>
    </Button>
  )
}

export default ActionProductsPI
