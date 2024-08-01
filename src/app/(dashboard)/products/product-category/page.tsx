import React from "react"
import HeaderProductCategoryPI from "@/components/pages/products/product-category/HeaderProductCategoryPI"
import TableProductCategoryPI from "@/components/pages/products/product-category/TableProductCategoryPI"
import { ProductCategoryPIProvider } from "@/providers/products/product-category/ProductCategoryPIProvider"

const ProductCategory = () => {
  return (
    <ProductCategoryPIProvider>
      <HeaderProductCategoryPI />
      <TableProductCategoryPI />
    </ProductCategoryPIProvider>
  )
}

export default ProductCategory
