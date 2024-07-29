"use client"

import Breadcrumb from "@/components/custom/Breadcrumb"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const DetailHeaderDraft = () => {
  const { productId, dataProducts } = useDraftProductsPIContext()

  return (
    <section className="flex flex-col">
      <Breadcrumb
        data={[
          {
            label: "Products",
            link: "/products/products",
          },
          {
            label: productId ? "Detail Products" : "Add Products",
            link: `/products/products/${productId ?? "add"}`,
          },
        ]}
      />

      <h5 className="text-xs text-neutral-grey-600-body-text">
        {productId ? dataProducts?.name || "Nama Product" : "Draft Products"}
      </h5>
    </section>
  )
}

export default DetailHeaderDraft
