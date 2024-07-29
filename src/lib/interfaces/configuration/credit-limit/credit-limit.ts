export interface HistoryLogInterface {
  creator_name: string
  creator_id: string
  created_at: number
  amount?: string
  action?: string
}

export interface CreditLimitInterface {
  id: string
  company_id: string
  amount: string
  history_log: HistoryLogInterface[]
  created_at: number | Date
  updated_at: number | Date
}

export interface CreditAdjustmentInterface {
  id: string
  customer: {
    id: string
    name: string
  }
  history_log: HistoryLogInterface[]
  current_credit_limit: string
  requested_credit_limit: string
  status: "waiting_for_approval" | "approved" | "rejected"
  created_at: number | Date
  updated_at: number | Date
}
