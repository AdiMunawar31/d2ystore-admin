export interface CustomersInterface {
  id: string
  name: string
  code: string
  type: "company" | "individual"
  status: "draft" | "active" | "rejected" | "inactive"
  phone: string
  mobile: string
  email: string
  website: string
  tax_number: string
  language: {
    id: string
    name: string
  }
  customer_group: {
    id: string
    name: string
  }
  pkp: boolean
  customer_company: {
    id: string
    name: string
    job_position: string
    title: {
      id: string
      name: string
    }
    nik: string
  }
  contacts: [
    {
      id: string
      title: {
        id: string
        name: string
      }
      name: string
      job_position: string
      nik: string
      phone: string
      email: string
    },
  ]
  addresses: [
    {
      id: string
      address_type: {
        id: string
        name: string
      }
      street_address: string
      country: {
        id: string
        name: string
      }
      province: {
        id: string
        name: string
      }
      city: {
        id: string
        name: string
      }
      district: {
        id: string
        name: string
      }
      sub_district: {
        id: string
        name: string
      }
      postal_code: {
        id: string
        name: string
      }
      longitude: number
      latitude: number
      is_primary_address: boolean
      image: string
    },
  ]
  sales: {
    branch: {
      id: string
      name: string
    }
    salesman: {
      id: string
      name: string
    }
    payment_term: {
      id: string
      name: string
    }
    blocked_sales_order_action: string[] // invoice, delivery_order
  }
  purchasing: {
    payment_term: {
      id: string
      name: string
    }
  }
  invoice: {
    receiveable: {
      account: {
        id: string
        name: string
        code: string
      }
      credit_limit: number
      credit_used: number
      credit_balance: number
    }
    payable: {
      account: {
        id: string
        name: string
        code: string
      }
    }
    bank_accounts: [
      {
        id: string
        name: string
        account_number: string
        account_name: string
        is_verify: boolean
        status: string // active, deleted
      },
    ]
    tax: {
      id: string
      name: string
      country: {
        id: string
        name: string
      }
      city: {
        id: string
        name: string
      }
      address: string
      currency: {
        id: string
        name: string
      }
    }
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
  }
}

export interface CustomersOMSInterface {
  id: string
  name: string
  status: string
  type: string
  code: string
  contacts: {
    id: string
    title: {
      id: string
      name: string
    }
    name: string
    job_position: string
    nik: string
    phone: string
    email: string
  }[]
  created_at?: number
  created_by?: number
  updated_at?: number
  updated_by?: number
  customer_groups: { id: string; name: string }[]
  invoice?: Invoice
}

export interface Invoice {
  receiveable: Receiveable
  payable: Payable
  bank_accounts: string[]
  tax: Tax
  currency: Info
}

export interface Receiveable {
  account: Account
  credit_limit: number
  credit_used: number
  credit_balance: number
}

export interface Account {
  id: string
  name: string
  code: string
}

export interface Payable {
  account: Account
}

export interface Tax {
  id: string
  name: string
  country: Info
  city: Info
  address: string
}

export interface Info {
  id: string
  name: string
}

export interface CustomersContactsInterface {
  key: string
  title: {
    id: "Mr." | "Mrs."
  }
  name: string
  job_position: string
  nik: string
  phone: string
  email: string
}

export interface CustomersAddressesInterface {
  address_type?: {
    id: string
    name?: string
    code?: string
  }
  street_address: string
  country?: {
    id: string
    name?: string
    code?: string
  }
  province?: {
    id: string
    name?: string
    code?: string
  }
  city?: {
    id: string
    name?: string
    code?: string
  }
  district?: {
    id: string
    name?: string
    code?: string
  }
  sub_district?: {
    id: string
    name?: string
    code?: string
  }
  postal_code?: {
    id: string
    name?: string
    code?: string
  }
  longitude: number
  latitude: number
  is_primary_address?: boolean
  image: string
  path: string
}

export interface CustomersInvoiceInterface {
  receiveable: {
    account: {
      id: string
      name: string
    }
    credit_limit: number
    credit_used: number
    credit_balance: number
  }
  payable: {
    account: {
      id: string
      name: string
    }
  }
  bank_accounts: CustomersInvoiceBankAccount[]
  tax: {
    id: string
    name: string
    country: {
      id: string
      name: string
      code?: string
    }
    city: {
      id: string
      name: string
      code?: string
    }
    address: string
  }
  currency: {
    id: string
    name: string
  }
}

export interface CustomersInvoiceBankAccount {
  key: string
  id: string
  account_number: string
  account_name: string
  is_verify: boolean
  status: "active" | "deleted"
}

export interface PricelistCustomersInterface {
  id: string
  name: string
}
export interface DocumentCustomersInterface {
  id: string
  document_name: {
    id: string
    name: string
  }
  attachment_name: string
  url: string
  value: string
}
