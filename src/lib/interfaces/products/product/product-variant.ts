export interface ProductVariantPIInterface {
  id: string
  product: {
    id: string
    name: string
    code: string
  }
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
  sku: string
  barcode: string
  cost: number
  extra_price: number
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
  uom_levels: UomLevelsPVPIInterface[]
  attributes: {
    id: string
    name: string
    value: string
  }[]
  availability: AvailabilityPVPIInterface
  inventory: InventoryPVPIInterface
  accounting: AccountingPVPIInterface
  purchasing: PurchasingPVPIInterface
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
  store_price: number
  final_price: number
  final_price_after_tax: number
  tax: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: string
    name: string
    amount?: number
    include_in_price?: boolean | string
  }
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
}

export interface AvailabilityPVPIInterface {
  channels: ChannelAvailabilityPVPIInterface[]
}

export interface ChannelAvailabilityPVPIInterface {
  id: string
  name: string
  code: string
  time: TimeChannelAvailabilityPVPIInterface[]
  sales_types: SalesTypeChannelAvailabilityPVPIInterface[]
  regions: RegionChannelAvailabilityPVPIInterface[]
  branches: {
    id: string
    name: string
  }[]
}

export interface TimeChannelAvailabilityPVPIInterface {
  id: string
  name: string
  start_time: string
  end_time: string
  days: number[] | null
  status: "active" | "inactive" | "deleted"
}

export interface SalesTypeChannelAvailabilityPVPIInterface {
  id: string
  name: string
}

export interface RegionChannelAvailabilityPVPIInterface {
  id: string
  name: string
  branches: {
    id: string
    name: string
  }[]
}

export interface InventoryPVPIInterface {
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

export interface AccountingPVPIInterface {
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

export interface PurchasingPVPIInterface {
  tax: {
    id: string
    name: string
    value: string
  }
  vendors: VendorsPurchasingPVPIInterface[]
}

export interface VendorsPurchasingPVPIInterface {
  id: string
  name: string
  valid_date: string
}

export interface UomLevelsPVPIInterface {
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

export interface DetailDraftPVPIInterface {
  name: string
  status: ProductVariantPIInterface["status"]
  available_action: string[]
  image_url: string | null
}

export interface TaxInterface {
  id: string
  name: string
}

export interface BasicInfoDraftPVPIInterface {
  product?: ProductVariantPIInterface["product"]
  product_type?: ProductVariantPIInterface["product_type"]
  pos?: ProductVariantPIInterface["pos"]
  product_category?: ProductVariantPIInterface["product_category"]
  product_brand?: ProductVariantPIInterface["product_brand"]
  industry?: ProductVariantPIInterface["industry"]
  external_code?: ProductVariantPIInterface["external_code"]
  sku?: ProductVariantPIInterface["sku"]
  barcode?: ProductVariantPIInterface["barcode"]
  cost?: ProductVariantPIInterface["cost"]
  extra_price?: ProductVariantPIInterface["extra_price"]
  base_price?: ProductVariantPIInterface["base_price"]
  base_uom?: ProductVariantPIInterface["base_uom"]
  purchase_uom?: ProductVariantPIInterface["purchase_uom"]
  uom_levels?: UomLevelsPVPIInterface[]
  useUomLeveling?: boolean
  tax?: TaxInterface
}

export interface AvailabilityDraftPVPIInterface extends AvailabilityPVPIInterface {}

export interface InventoryDraftPVPIInterface extends InventoryPVPIInterface {}

export interface AccountPurchaseDraftPVPIInterface {
  accounting: AccountingPVPIInterface
  purchasing: PurchasingPVPIInterface
}
