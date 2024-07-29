import GridProductsPI from "@/components/pages/products/products/GridProductsPI"
import HeaderProductsPI from "@/components/pages/products/products/HeaderProductsPI"
import TableProductsPI from "@/components/pages/products/products/TableProductsPI"
import { ProductsPIProvider } from "@/providers/products/products/ProductsPIProvider"

const Products = () => {
  return (
    <>
      <ProductsPIProvider>
        <HeaderProductsPI hideDelete={true} />
        <TableProductsPI />
        <GridProductsPI />
      </ProductsPIProvider>
    </>
  )
}

export default Products
