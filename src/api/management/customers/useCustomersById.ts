import { useQuery } from "@tanstack/react-query"
import { dummyCustomerData } from "@/lib/data/customers"

type useCustomersByIdProps = {
  id?: string
}

const useCustomersById = ({ id }: useCustomersByIdProps) => {
  const getCustomersByIdFn = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = dummyCustomerData

      return response.data
    } catch (error) {
      console.error(error)
      throw new Error("error get customers by id")
    }
  }

  const query = useQuery({
    queryKey: ["customers-by-id", id],
    queryFn: getCustomersByIdFn,
    enabled: !!id,
  })

  return { ...query }
}
export default useCustomersById
