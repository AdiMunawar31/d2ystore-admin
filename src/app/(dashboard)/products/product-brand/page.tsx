import React from "react"
import HeaderProductBrand from "@/components/pages/products/product-brand/HeaderProductBrand"
import TableProductBrand from "@/components/pages/products/product-brand/TableProductBrand"
import { ProductBrandProvider } from "@/providers/products/product-brand/ProductBrandProvider"

const ProductBrand = () => {
  return (
    <ProductBrandProvider>
      <HeaderProductBrand />
      <TableProductBrand />
    </ProductBrandProvider>
  )
}

export default ProductBrand
