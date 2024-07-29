import type { UomLevelsProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const BaseUomCellUomLeveling = ({ data }: { data: UomLevelsProductsPIInterface }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { key, convertion } = data

  const { basicInfo } = useDraftProductsPIContext()

  return <span className="p-4 capitalize">{basicInfo.base_uom?.format || "-"}</span>
}

export default BaseUomCellUomLeveling
