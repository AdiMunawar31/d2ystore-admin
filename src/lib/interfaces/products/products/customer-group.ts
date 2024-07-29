export interface DetailDraftCustomerGroupInterface {
  name?: string
  parent: {
    id: string
    name: string
  }
  associated_customers: number
  external_code: string
  group_rules: boolean
}

export interface CustomerInterface {
  key: string
  id: string
  name: string
  added_at: number
  code: string
}

export interface BasicTransactionInterface {
  last_transaction: string
  period_transaction: {
    id: string
    name: string
  }
  start_date_transaction: Date | string | undefined
  end_date_transaction: Date | string | undefined
  start_amount_transaction: number
  end_amount_transaction: number
  start_total_amount_transaction: number
  end_total_amount_transaction: number
  start_total_count_transaction: number
  end_total_count_transaction: number
}

export interface PaymentMethodInterface {
  key: string
  id: string
  name: string
  date: string
}

export interface CustomerGroupEntityInterface {
  id: string
  name: string
  code: string
  status: string
  external_code: string
  parent: {
    id: string
    name: string
  }
  associated_customers: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customers: any[]
  geo_location: {
    province: string | null
    city: string | null
    district: string | null
    zone: string | null
  }
  basic_transaction: {
    last_transaction: string
    period_transaction: {
      id: string
      name: string
    }
    start_date_transaction: string
    end_date_transaction: string
    start_amount_transaction: number
    end_amount_transaction: number
    start_total_amount_transaction: number
    end_total_amount_transaction: number
    start_total_count_transaction: number
    end_total_count_transaction: number
    payment_method: string | null
    product: string | null
    product_category: string | null
    uom: string | null
  }
  advanced_tansaction: {
    promotion_type: string | null
    promotion_specific: string | null
    shipping_method: string | null
    order_status: string | null
  }
  group_rules: boolean
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
}
