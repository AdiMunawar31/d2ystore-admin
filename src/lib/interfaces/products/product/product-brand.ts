export interface ProductBrandInterface {
  id: string
  name: string
  code: string
  parent: {
    id: string
    name: string
  }
  status: "active" | "inactive" | "deleted"
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
}

export interface FormProductBrandInterface {
  parent?: {
    id: string
    name: string
  }
  name: string
}
