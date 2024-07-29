export interface ProductsPIInterface {
  id: string
  name: string
  code: string
  status: "active" | "inactive" | "deleted"
  timezone: string
  image_url: string | null
  tags: string[]
  available_action: string[]
  product_type: {
    id: string
    name: string
  }
  pos: {
    card_color: string
  }
  product_category: {
    id: string
    name: string
  }
  product_brand: {
    id: string
    name: string
  }
  industry: {
    id: string
    name: string
  }
  external_code: string
  cost: number
  base_price: number
  base_uom: {
    id: string
    name: string
    code: string
    format: string
  }
  purchase_uom: {
    id: string
    name: string
    code: string
    format: string
  }
  uom_levels: UomLevelsProductsPIInterface[]
  attributes: AttributeProductsPIInterface[]
  variants: VariantProductsPIInterface[]
  availability: AvailabilityProductsPIInterface
  inventory: InventoryProductsPIInterface
  accounting: AccountingProductsPIInterface
  purchasing: PurchasingProductsPIInterface
  registration: {
    type: {
      id: string
      name: string
    }
    number: string
    valid_date_start: string
    valid_date_end: string
    attachment: string
  }[]
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
}

export interface AvailabilityProductsPIInterface {
  channels: ChannelAvailabilityProductsPIInterface[]
}

export interface ChannelAvailabilityProductsPIInterface {
  id: string
  name: string
  code: string
  time: TimeChannelAvailabilityProductsPIInterface[]
  sales_types: SalesTypeChannelAvailabilityProductsPIInterface[]
  regions: RegionChannelAvailabilityProductsPIInterface[]
  branches: {
    id: string
    name: string
  }[]
}

export interface TimeChannelAvailabilityProductsPIInterface {
  id: string
  name: string
  start_time: string
  end_time: string
  days: number[] | null
  status: "active" | "inactive" | "deleted"
}

export interface SalesTypeChannelAvailabilityProductsPIInterface {
  id: string
  name: string
}

export interface RegionChannelAvailabilityProductsPIInterface {
  id: string
  name: string
  branches: {
    id: string
    name: string
  }[]
}

export interface InventoryProductsPIInterface {
  weight: {
    nett?: number
    gross?: number
    uom?: {
      id: string
      name: string
      code: string
      format: string
    }
  }
  volume: {
    product_volume?: {
      length?: number
      width?: number
      height?: number
      volume?: number
      uom?: {
        id: string
        name: string
        code: string
        format: string
      }
    }
    packaging_volume?: {
      length?: number
      width?: number
      height?: number
      volume?: number
      uom?: {
        id: string
        name: string
        code: string
        format: string
      }
    }
  }
  storage: {
    storage_condition?: {
      id: string
      name: string
    }
    temperature_condition?: {
      id: string
      name: string
    }
    shelf?: {
      shelf_life?: number
      uom?: {
        id: string
        name: string
        code: string
        format: string
      }
    }
  }
}

export interface AccountingProductsPIInterface {
  income_account: {
    id: string
    name: string
    code: string
  }
  expense_account: {
    id: string
    name: string
    code: string
  }
}

export interface PurchasingProductsPIInterface {
  tax: {
    id: string
    name: string
    value: string
  }
  vendors: VendorsPurchasingProductsPIInterface[]
}

export interface VendorsPurchasingProductsPIInterface {
  id: string
  name: string
  valid_date: string
}

export interface UomLevelsProductsPIInterface {
  key: string
  id?: string
  name?: string
  uom?: {
    id: string
    name: string
    code: string
    format: string
  }
  qty?: number
  convertion?: number
}

export interface AttributeProductsPIInterface {
  id: string
  name: string
  values: string[]
  pos?: {
    card_color: string
  }
}

export interface VariantProductsPIInterface {
  id?: string
  code?: string
  name: string
  status: "active" | "inactive" | "deleted"
  attributes: {
    id: string
    name: string
    value: string
  }[]
  cost?: number
  extra_price?: number
  final_price: number
  final_price_after_tax: number
  sku: string
  barcode: string
}

export interface DetailDraftProductsPIInterface {
  name: string
  status: ProductsPIInterface["status"]
  available_action: string[]
  image_url: string | null
}

export interface BasicInfoDraftProductsPIInterface {
  product_type?: ProductsPIInterface["product_type"]
  pos?: ProductsPIInterface["pos"]
  product_category?: ProductsPIInterface["product_category"]
  product_brand?: ProductsPIInterface["product_brand"]
  industry?: ProductsPIInterface["industry"]
  external_code?: ProductsPIInterface["external_code"]
  cost?: ProductsPIInterface["cost"]
  base_price?: ProductsPIInterface["base_price"]
  base_uom?: ProductsPIInterface["base_uom"]
  purchase_uom?: ProductsPIInterface["purchase_uom"]
  uom_levels?: UomLevelsProductsPIInterface[]
  useUomLeveling?: boolean
}

export interface AttributeVariantDraftProductsPIInterface {
  attributes: AttributeProductsPIInterface[]
  variants: VariantProductsPIInterface[]
}

export interface AvailabilityDraftProductsPIInterface extends AvailabilityProductsPIInterface {}

export interface InventoryDraftProductsPIInterface extends InventoryProductsPIInterface {}

export interface AccountPurchaseDraftProductsPIInterface {
  accounting: AccountingProductsPIInterface
  purchasing: PurchasingProductsPIInterface
}
