interface Country {
  Id: string
  Name: string
}

interface Account {
  id: string
  company_id: string
  code: string
  name: string
}

interface Distribution {
  based_on: string
  account: Account
  tax_grid: string
}

export interface TaxesInterface {
  id: string
  company_id: string
  name: string
  label_on_invoice: string
  country: Country
  computation: string
  type: string
  amount: string
  include_in_price: true | false
  description: string
  active: true | false
  default: true | false
  distribution_for_invoices: Distribution[]
  distribution_for_refunds: Distribution[]
}

export interface TaxesInfoInterface {
  label_invoice: string
  country: string
  tax_computation: string
  tax_type: string
  amount: string
  description: string
  include_price: true | false
}
