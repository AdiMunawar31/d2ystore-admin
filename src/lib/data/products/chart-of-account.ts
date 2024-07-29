import type { ChartOfAccountInterface } from "@/lib/interfaces/products/product/chartOfAccount"

const dummyChartOfAccounts: ChartOfAccountInterface[] = [
  {
    id: "COA001",
    company_id: "COMP001",
    code: "1000",
    name: "Cash",
    account_type_number: "1",
    to_increase: "debit",
    opening_balance: "5000",
    account_type: {
      id: "AT001",
      name: "Asset",
    },
    description: "Cash in hand",
  },
  {
    id: "COA002",
    company_id: "COMP002",
    code: "2000",
    name: "Accounts Receivable",
    account_type_number: "2",
    to_increase: "debit",
    opening_balance: "3000",
    account_type: {
      id: "AT002",
      name: "Liability",
    },
    description: "Amounts owed by customers",
  },
  {
    id: "COA003",
    company_id: "COMP003",
    code: "3000",
    name: "Inventory",
    account_type_number: "3",
    to_increase: "debit",
    opening_balance: "8000",
    account_type: {
      id: "AT001",
      name: "Asset",
    },
    description: "Goods available for sale",
  },
  {
    id: "COA004",
    company_id: "COMP004",
    code: "4000",
    name: "Accounts Payable",
    account_type_number: "4",
    to_increase: "credit",
    opening_balance: "2000",
    account_type: {
      id: "AT002",
      name: "Liability",
    },
    description: "Amounts owed to suppliers",
  },
  {
    id: "COA005",
    company_id: "COMP005",
    code: "5000",
    name: "Equity",
    account_type_number: "5",
    to_increase: "credit",
    opening_balance: "10000",
    account_type: {
      id: "AT003",
      name: "Equity",
    },
    description: "Owner's equity",
  },
]

export const chartOfAccountsApiResponse = {
  data: dummyChartOfAccounts,
  message: "Chart of accounts fetched successfully",
  status: 200,
  meta: {
    total: dummyChartOfAccounts.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyChartOfAccounts.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
