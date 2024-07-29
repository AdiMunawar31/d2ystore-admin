import { forwardRef } from "react"
import AccountInformationAP from "./AccountInformationAP"
import PurchaseInformationAP from "./PurchaseInformationAP"

const AccountPurchase = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="mb-6 flex flex-col gap-4 p-4">
      <AccountInformationAP />
      <PurchaseInformationAP />
    </div>
  )
})

AccountPurchase.displayName = "AccountPurchase"

export default AccountPurchase
