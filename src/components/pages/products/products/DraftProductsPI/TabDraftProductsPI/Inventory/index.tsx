import { forwardRef } from "react"
import PackagingVolume from "./PackagingVolume"
import ProductStorage from "./ProductStorage"
import ProductVolume from "./ProductVolume"
import ProductWeight from "./ProductWeight"

const Inventory = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
      <ProductWeight />
      <section className="hidden lg:block" />
      <ProductVolume />
      <PackagingVolume />
      <ProductStorage />
    </div>
  )
})

Inventory.displayName = "Inventory"

export default Inventory
