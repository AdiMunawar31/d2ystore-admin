"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"
import CategoryProductInformation from "./CategoryProductInformation"
import IndustryProductInformation from "./IndustryProductInformation"
import ProductBrandProductInformation from "./ProductBrandProductInformation"
import ProductTypeProductInformation from "./ProductTypeProductInformation"

const ProductInformation = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Product Information</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ProductTypeProductInformation />

        {/* <div className='block'>
          <Label required>Color Display on POS</Label>
          <ColorPicker
            color={basicInfo.pos?.card_color}
            onChange={(value) =>
              setBasicInfo((prev) => ({
                ...prev,
                pos: { ...prev.pos, card_color: value.hex },
              }))
            }
          />
        </div> */}

        <CategoryProductInformation />
        <ProductBrandProductInformation />
        <IndustryProductInformation />

        <div className="block">
          <Label htmlFor="external-code">External Code</Label>
          <Input
            id="external-code"
            type="text"
            value={basicInfo.external_code}
            onChange={(e) =>
              setBasicInfo((prev) => ({
                ...prev,
                external_code: e.target.value,
              }))
            }
            placeholder="Input External Code"
            wrapClassName="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductInformation
