"use client"

import { Loader2 } from "lucide-react"
import usePIProductsById from "@/api/products/products/usePIProductsById"
import { DraftProductsPIProvider } from "@/providers/products/products/DraftProductsPIProvider"
import DetailDraftProductsPI from "./DetailDraftProductsPI"
import HeaderDraftProductsPI from "./HeaderDraftProductsPI"
import TabDraftProductsPI from "./TabDraftProductsPI"

type DraftProductsProps = {
  productId?: string
}

const DraftProductsPI = ({ productId }: DraftProductsProps) => {
  const { data: dataProducts, isLoading: isLoadingDataProducts } = usePIProductsById({
    id: productId,
  })

  if (isLoadingDataProducts) {
    return (
      <div className="flex h-full flex-1 items-center justify-center p-4">
        <span className="animate-spin">
          <Loader2 size={36} />
        </span>
      </div>
    )
  }

  return (
    <DraftProductsPIProvider
      productId={productId}
      dataProducts={dataProducts}
      isLoadingDataProducts={isLoadingDataProducts}
    >
      <HeaderDraftProductsPI />
      <DetailDraftProductsPI />
      <TabDraftProductsPI />
    </DraftProductsPIProvider>
  )
}

export default DraftProductsPI
