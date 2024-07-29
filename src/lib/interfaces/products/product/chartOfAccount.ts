interface AccountType {
  id: string
  name: string
}

export interface ChartOfAccountInterface {
  id: string
  company_id: string
  code: string
  name: string
  account_type_number: string
  to_increase: string
  opening_balance: string
  account_type: AccountType
  description: string
}

export interface AccountTypeInterface {
  id: string
  name: string
  description: string
}

export interface FormAddChartOfAccountInterface {
  code: string
  name: string
  to_increase: string
  opening_balance: string
  description: string
  account_type: AccountType
}

export interface DataImport {
  name: string
  data: string[]
}
