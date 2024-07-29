export interface ProductComboInterface {
  id: string
  name: string
  status: "active" | "inactive" | "deleted"
  available_action: string[]
  image_url: string | null
  product_type: {
    id: string
    name: string
  }
  product_category: {
    id: string
    name: string
  }
  products: {
    id: string
    name: string
    base_price: number
    variants: {
      id: string
      name: string
      extra_price: number
    }[]
  }[]
  pos: {
    card_color: string
  }
  total_price: number
  discount_percent: number
  discount_fixed: number
  combo_price: number
  availability: AvailabilityPCPIInterface
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
}

export interface DraftProductComboInterface {
  key: string
  product: string
  quantity: number
  price: number
  uom: string
  discount: number
}

export interface VariantProductComboInterface {
  key: string
  level: string
  quantity: number
  uom: string
  conversion: number
  base_uom: string
}

export interface FormProductComboInterface {
  name: string
  status: string
  available_action: string[]
  image_url: string | null
  product_category?: {
    id?: string
    name?: string
  }
  product_type?: {
    id?: string
    name?: string
  }
  products?: ProductsPCPIInterface[]
  pos?: {
    card_color?: string
  }
  discount_percent?: number
  discount_fixed?: number
  total_price?: number
  combo_price?: number
}

export interface ProductsPCPIInterface {
  key?: string
  id?: string
  code?: string
  base_price?: number
  name?: string
  external_code?: string
  variants?: VariantsPCPIInterface[]
}

export interface VariantsPCPIInterface {
  key?: string
  id?: string
  code?: string
  name?: string
  external_code?: string
  sku?: string
  extra_price?: number
}

export interface AvailabilityPCPIInterface {
  channels: ChannelAvailabilityPCPIInterface[]
}

export interface ChannelAvailabilityPCPIInterface {
  id: string
  name: string
  time: TimeChannelAvailabilityPCPIInterface[]
  sales_types: SalesTypeChannelAvailabilityPCPIInterface[]
  regions: RegionChannelAvailabilityPCPIInterface[]
  branches: {
    id: string
    name: string
  }[]
}

export interface ChannelAvailabilityPCPIInterface {
  id: string
  name: string
  code: string
  time: TimeChannelAvailabilityPCPIInterface[]
  sales_types: SalesTypeChannelAvailabilityPCPIInterface[]
  regions: RegionChannelAvailabilityPCPIInterface[]
  branches: {
    id: string
    name: string
  }[]
}

export interface TimeChannelAvailabilityPCPIInterface {
  id: string
  name: string
  start_time: string
  end_time: string
  days: number[] | null
  status: "active" | "inactive" | "deleted"
}

export interface SalesTypeChannelAvailabilityPCPIInterface {
  id: string
  name: string
}

export interface RegionChannelAvailabilityPCPIInterface {
  id: string
  name: string
  branches: {
    id: string
    name: string
  }[]
}

export interface AvailabilityDraftPCPIInterface extends AvailabilityPCPIInterface {}
