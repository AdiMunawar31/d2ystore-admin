import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { CreditLimitInterface } from "@/lib/interfaces/configuration/credit-limit/credit-limit"

const creditLimits: CreditLimitInterface = {
  id: "CL001",
  company_id: "COMP001",
  amount: "5000",
  history_log: [
    {
      creator_name: "Alice",
      creator_id: "USR001",
      created_at: Date.now(),
      amount: "5000",
      action: "Created",
    },
    {
      creator_name: "Bob",
      creator_id: "USR002",
      created_at: Date.now(),
      amount: "1000",
      action: "Updated",
    },
  ],
  created_at: new Date(),
  updated_at: new Date(),
}

// Dummy ApiResponse
export const creditLimitsApiResponse: ApiResponseInterface<CreditLimitInterface> = {
  data: creditLimits,
  message: "Credit limits fetched successfully",
  status: 200,
  meta: {
    total: 5,
    limit: 5,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: 5,
    limit: 5,
    current_page: 1,
    last_page: 1,
  },
}
