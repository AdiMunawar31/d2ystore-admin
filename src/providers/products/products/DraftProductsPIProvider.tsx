"use client"

import type { Dispatch, ReactNode, SetStateAction } from "react"
import { createContext, useContext, useState } from "react"
import { ulid } from "ulidx"
import type {
  AccountPurchaseDraftProductsPIInterface,
  AttributeVariantDraftProductsPIInterface,
  AvailabilityDraftProductsPIInterface,
  BasicInfoDraftProductsPIInterface,
  DetailDraftProductsPIInterface,
  InventoryDraftProductsPIInterface,
  ProductsPIInterface,
} from "@/lib/interfaces/products/product/products"

interface DraftProductsPIContextData {
  productId?: string
  dataProducts?: ProductsPIInterface
  isLoadingDataProducts: boolean

  detail: DetailDraftProductsPIInterface
  setDetail: Dispatch<SetStateAction<DetailDraftProductsPIInterface>>

  basicInfo: BasicInfoDraftProductsPIInterface
  setBasicInfo: Dispatch<SetStateAction<BasicInfoDraftProductsPIInterface>>

  attributeVariant: AttributeVariantDraftProductsPIInterface
  setAttributeVariant: Dispatch<SetStateAction<AttributeVariantDraftProductsPIInterface>>

  availability: AvailabilityDraftProductsPIInterface
  setAvailability: Dispatch<SetStateAction<AvailabilityDraftProductsPIInterface>>

  inventory: InventoryDraftProductsPIInterface
  setInventory: Dispatch<SetStateAction<InventoryDraftProductsPIInterface>>

  accountPurchase: AccountPurchaseDraftProductsPIInterface
  setAccountPurchase: Dispatch<SetStateAction<AccountPurchaseDraftProductsPIInterface>>
}

const DraftProductsPIContext = createContext<DraftProductsPIContextData | undefined>(undefined)

function useDraftProductsPIContext(): DraftProductsPIContextData {
  const context = useContext(DraftProductsPIContext)
  if (!context) {
    throw new Error("useDraftProductsPIContext must be used within a DraftProductsPIProvider")
  }
  return context
}

type DraftProductsPIProviderProps = {
  children: ReactNode
  productId?: string
  dataProducts?: ProductsPIInterface
  isLoadingDataProducts: boolean
}

const DraftProductsPIProvider = ({
  children,
  productId,
  dataProducts,
  isLoadingDataProducts,
}: DraftProductsPIProviderProps) => {
  const [detail, setDetail] = useState<DetailDraftProductsPIInterface>({
    name: dataProducts?.name || "",
    status: dataProducts?.status || "active",
    available_action: dataProducts?.available_action || [],
    image_url: dataProducts?.image_url || null,
  })

  const [basicInfo, setBasicInfo] = useState<BasicInfoDraftProductsPIInterface>({
    product_type: dataProducts?.product_type,
    pos: dataProducts?.pos,
    product_category: dataProducts?.product_category,
    product_brand: dataProducts?.product_brand,
    industry: dataProducts?.industry,
    external_code: dataProducts?.external_code,
    cost: dataProducts?.cost,
    base_price: dataProducts?.base_price,
    base_uom: dataProducts?.base_uom,
    purchase_uom: dataProducts?.purchase_uom,
    uom_levels: dataProducts?.uom_levels.map((item) => ({ ...item, key: ulid() })) || [],
    useUomLeveling: dataProducts?.uom_levels && dataProducts?.uom_levels.length > 0,
  })

  const [attributeVariant, setAttributeVariant] = useState<AttributeVariantDraftProductsPIInterface>({
    attributes: dataProducts?.attributes || [],
    variants: dataProducts?.variants || [],
  })

  const [availability, setAvailability] = useState<AvailabilityDraftProductsPIInterface>(
    dataProducts?.availability || {
      channels: [],
    }
  )

  const [inventory, setInventory] = useState<InventoryDraftProductsPIInterface>(
    dataProducts?.inventory || {
      weight: {},
      volume: {},
      storage: {},
    }
  )

  const [accountPurchase, setAccountPurchase] = useState<AccountPurchaseDraftProductsPIInterface>({
    accounting: dataProducts?.accounting || {
      expense_account: {
        id: "",
        name: "",
        code: "",
      },
      income_account: {
        id: "",
        name: "",
        code: "",
      },
    },
    purchasing: dataProducts?.purchasing || {
      tax: {
        id: "",
        name: "",
        value: "",
      },
      vendors: [],
    },
  })

  return (
    <DraftProductsPIContext.Provider
      value={{
        productId,
        dataProducts,
        isLoadingDataProducts,

        detail,
        setDetail,

        basicInfo,
        setBasicInfo,

        attributeVariant,
        setAttributeVariant,

        availability,
        setAvailability,

        inventory,
        setInventory,

        accountPurchase,
        setAccountPurchase,
      }}
    >
      {children}
    </DraftProductsPIContext.Provider>
  )
}

export { DraftProductsPIProvider, useDraftProductsPIContext }
