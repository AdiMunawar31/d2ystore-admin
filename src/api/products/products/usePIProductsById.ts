import { useQuery } from "@tanstack/react-query"
import { productByIdApiResponse } from "@/lib/data/products/product"

type usePIProductsByIdProps = {
  id?: string
}

const usePIProductsById = ({ id }: usePIProductsByIdProps) => {
  const getPIProductsByIdFn = async () => {
    try {
      const response = productByIdApiResponse

      return response.data
    } catch (error) {
      console.error(error)
      throw new Error("error fetch pi products by id")
    }
  }

  const query = useQuery({
    queryKey: ["pi-products-by-id", id],
    queryFn: getPIProductsByIdFn,
    enabled: !!id,
  })

  return { ...query }
}
export default usePIProductsById
