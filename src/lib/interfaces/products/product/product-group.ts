export interface ProductGroupPIInterface {
  id: string
  product_group: {
    id: string
    name: string
  }
  parent: string
  associated_product: string
}

export interface DraftProductGroupPIInterface {
  name?: string
  parent: string
  associated_product: string
  external_code: string
  bad_stock_location: string
  source_document: string
  document: File | null
}

export interface AssociatedProductInterface {
  id: string
  name: string
  added_at: number
  code: string
}

export interface ProductGroupInterface {
  key?: string
  id?: string
  parent: {
    id: string
    name: string
  }
  company: {
    id: string
  }
  name: string
  code: string
  external_code: string
  product_variants: {
    id: string
    name: string
    code: string
    added_at: number
  }[]
  associated_product: number
}
