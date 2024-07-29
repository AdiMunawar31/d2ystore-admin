import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { jobPositionsApiResponse } from "@/lib/data/target-management"
import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { JobPositionInterface } from "@/lib/interfaces/products/products/job-position"

type useJobPositionListProps = {
  params?: {
    page?: number
    limit?: number
    keyword?: string
    companyId?: string
    inherit?: string
  }
}

const useJobPositionList = (props?: useJobPositionListProps) => {
  const [meta, setMeta] = useState<ApiResponseInterface<JobPositionInterface[]>["meta"]>()

  const getJobPositionListFn = async () => {
    try {
      const response = jobPositionsApiResponse
      setMeta(response.meta)

      return response.data
    } catch (error) {
      throw new Error("error fetch job-position list")
    }
  }

  const query = useQuery({
    queryKey: [
      "job-position-list",
      props?.params?.page,
      props?.params?.limit,
      props?.params?.keyword,
      props?.params?.companyId,
      props?.params?.inherit,
    ],
    queryFn: getJobPositionListFn,
  })

  return { ...query, meta }
}
export default useJobPositionList
