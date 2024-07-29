import { forwardRef } from "react"
import BasePriceUoM from "./BasePriceUoM"
import ProductInformation from "./ProductInformation"

const BasicInfo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-4 p-4">
      <ProductInformation />
      <BasePriceUoM />
    </div>
  )
})

BasicInfo.displayName = "BasicInfo"

export default BasicInfo
