import type { TaxesInterface } from "@/lib/interfaces/journal/taxes"

const dummyTaxes: TaxesInterface[] = [
  {
    id: "TAX001",
    company_id: "COMP001",
    name: "Value Added Tax",
    label_on_invoice: "VAT",
    country: {
      Id: "CTRY001",
      Name: "Country A",
    },
    computation: "percentage",
    type: "sales",
    amount: "15",
    include_in_price: true,
    description: "15% VAT for Country A",
    active: true,
    default: true,
    distribution_for_invoices: [
      {
        based_on: "net",
        account: {
          id: "ACC001",
          company_id: "COMP001",
          code: "ACC_VAT001",
          name: "VAT Account",
        },
        tax_grid: "Standard",
      },
    ],
    distribution_for_refunds: [
      {
        based_on: "net",
        account: {
          id: "ACC002",
          company_id: "COMP001",
          code: "ACC_VAT_REFUND001",
          name: "VAT Refund Account",
        },
        tax_grid: "Standard",
      },
    ],
  },
  {
    id: "TAX002",
    company_id: "COMP002",
    name: "Goods and Services Tax",
    label_on_invoice: "GST",
    country: {
      Id: "CTRY002",
      Name: "Country B",
    },
    computation: "percentage",
    type: "purchase",
    amount: "10",
    include_in_price: false,
    description: "10% GST for Country B",
    active: true,
    default: false,
    distribution_for_invoices: [
      {
        based_on: "gross",
        account: {
          id: "ACC003",
          company_id: "COMP002",
          code: "ACC_GST001",
          name: "GST Account",
        },
        tax_grid: "Reduced",
      },
    ],
    distribution_for_refunds: [
      {
        based_on: "gross",
        account: {
          id: "ACC004",
          company_id: "COMP002",
          code: "ACC_GST_REFUND001",
          name: "GST Refund Account",
        },
        tax_grid: "Reduced",
      },
    ],
  },
]

export const taxesApiResponse = {
  data: dummyTaxes,
  message: "Taxes fetched successfully",
  status: 200,
  meta: {
    total: dummyTaxes.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyTaxes.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
