import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { creditLimitsApiResponse } from "@/lib/data/zeus/credit-limit"
import type { CreditLimitInterface } from "@/lib/interfaces//configuration/credit-limit/credit-limit"
import type { ApiResponseInterface } from "@/lib/interfaces/api"

const useGetDefaultCreditLimit = () => {
  const [meta, setMeta] = useState<ApiResponseInterface<CreditLimitInterface>["meta"]>()

  const getDefaultCreditLimitFn = async () => {
    try {
      const response = creditLimitsApiResponse
      setMeta(response.meta)

      return response.data
    } catch (error) {
      throw new Error("error fetch default credit limit")
    }
  }

  const query = useQuery({
    queryKey: ["default-credit-limit"],
    queryFn: getDefaultCreditLimitFn,
  })

  return { ...query, meta }
}
export default useGetDefaultCreditLimit
