import type { CellContext } from "@tanstack/react-table"
import type { ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"
import FormProductBrand from "../FormProductBrand"

type ActionProductBrandProps = object & CellContext<ProductBrandInterface, unknown>

const ActionProductBrand = ({ row }: ActionProductBrandProps) => {
  const data = row.original
  return <FormProductBrand data={data} />
}

export default ActionProductBrand
