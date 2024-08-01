import type { CellContext } from "@tanstack/react-table"
import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"
import FormProductCategoryPI from "../FormProductCategoryPI"

type ActionProductCategoryPIProps = object & CellContext<ProductCategoryPIInterface, unknown>

const ActionProductCategoryPI = ({ row }: ActionProductCategoryPIProps) => {
  const data = row.original

  return <FormProductCategoryPI data={data} />
}

export default ActionProductCategoryPI
