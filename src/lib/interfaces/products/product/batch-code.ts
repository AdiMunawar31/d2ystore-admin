export interface BatchCodeInterface {
  id: string
  code: string
  expiry_date: string | Date
  company: {
    id: string
  }
  used: boolean
  created_at: number
  created_by: string
  updated_at: number
  updated_by: string
}
