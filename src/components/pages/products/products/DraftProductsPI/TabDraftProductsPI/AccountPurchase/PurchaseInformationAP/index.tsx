import TaxPurchaseInformation from "./TaxPurchaseInformation"
import VendorPurchaseInformation from "./VendorPurchaseInformation"

const PurchaseInformationAP = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Purchasing</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <TaxPurchaseInformation />

        <div className="hidden lg:block" />

        <div className="col-span-1 lg:col-span-2">
          <VendorPurchaseInformation />
        </div>
      </div>
    </section>
  )
}

export default PurchaseInformationAP
