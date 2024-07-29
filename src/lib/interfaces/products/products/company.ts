export interface CompanyInterface {
  id: string
  user_id: string
  full_name: string
  company_name: string
  company_type: string
  email: string
  phone: string
  language: string
  number_of_employees: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interest: any
  img: string
  active: boolean
  country: string
  telephone: string
  postal_code: string
  industry_type: string
  company_address: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legal_document: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bank_account: any
  company_level: string
  billing_expired_at: string
  created_at: string
  updated_at: string
  deleted_at: string
  sub_domain_website: string
  external_id: string
}
