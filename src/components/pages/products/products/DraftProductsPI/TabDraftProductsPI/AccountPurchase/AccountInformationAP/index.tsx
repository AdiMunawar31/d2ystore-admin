import ExpenseAccountInformation from "./ExpenseAccountInformation"
import IncomeAccountInformation from "./IncomeAccountInformation"

const AccountInformationAP = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Accounting</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <IncomeAccountInformation />
        <ExpenseAccountInformation />
      </div>
    </section>
  )
}

export default AccountInformationAP
