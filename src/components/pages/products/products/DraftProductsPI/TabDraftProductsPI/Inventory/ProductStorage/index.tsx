import ShelfLifeProductStorage from "./ShelfLifeProductStorage"
import StorageConditionProductStorage from "./StorageConditionProductStorage"
import TemperatureConditionProductStorage from "./TemperatureConditionProductStorage"

const ProductStorage = () => {
  return (
    <section className="flex flex-col gap-2 lg:col-span-2">
      <h2 className="text-sm font-bold">Product Storage</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StorageConditionProductStorage />
        <TemperatureConditionProductStorage />
        <ShelfLifeProductStorage />
      </div>
    </section>
  )
}

export default ProductStorage
