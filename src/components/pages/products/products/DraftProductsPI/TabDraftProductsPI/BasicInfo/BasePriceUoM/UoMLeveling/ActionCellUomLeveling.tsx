import { Button } from "@/components/ui/button"
import type { UomLevelsProductsPIInterface } from "@/lib/interfaces/products/product/products"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ActionCellUomLeveling = ({ data }: { data: UomLevelsProductsPIInterface }) => {
  const { key, uom } = data

  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  return (
    <div className="p-2">
      <Button
        disabled={uom?.id === basicInfo?.base_uom?.id}
        variant={"ghost-destructive"}
        onClick={() => {
          setBasicInfo((prev) => ({
            ...prev,
            uom_levels: prev.uom_levels?.filter((uom) => uom.key !== key),
          }))
        }}
      >
        Delete
      </Button>
    </div>
  )
}

export default ActionCellUomLeveling
