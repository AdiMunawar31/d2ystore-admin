import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { countryLevelsApiResponse } from "@/lib/data/zeus/country"
import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { CountryLevelInterface } from "@/lib/interfaces/zeus/country-level"

type useCountryLevelListProps = {
  params?: {
    page?: number
    limit?: number
    name?: string
  }
}

function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const useCountryLevelList = (props?: useCountryLevelListProps) => {
  const [meta, setMeta] = useState<ApiResponseInterface<CountryLevelInterface[]>["data"]>()

  const getCountryLevelListFn = async () => {
    try {
      const response = countryLevelsApiResponse
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData: ApiResponseInterface<CountryLevelInterface[]>["data"] = response.data.map((r: any) => ({
        ...r,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        level: r.level.map((l: any) => capitalize(l)),
      }))
      setMeta(formattedData)

      return formattedData
    } catch (error) {
      console.error(error)
      throw new Error("error fetch country level list")
    }
  }

  const query = useQuery({
    queryKey: ["country-level-list", props?.params?.limit, props?.params?.page, props?.params?.name],
    queryFn: getCountryLevelListFn,
  })

  return { ...query, meta }
}
export default useCountryLevelList
