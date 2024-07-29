import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { CountryLevelInterface } from "@/lib/interfaces/zeus/country-level"

const countryLevels: CountryLevelInterface[] = [
  {
    id: "CL001",
    country: {
      name: "United States",
      code: "US",
    },
    name: "Federal",
    code: "FED",
    max_level: 3,
    level: ["State", "County", "City"],
  },
  {
    id: "CL002",
    country: {
      name: "Canada",
      code: "CA",
    },
    name: "Provincial",
    code: "PRO",
    max_level: 3,
    level: ["Province", "District", "City"],
  },
  {
    id: "CL003",
    country: {
      name: "Australia",
      code: "AU",
    },
    name: "National",
    code: "NAT",
    max_level: 2,
    level: ["State", "City"],
  },
  {
    id: "CL004",
    country: {
      name: "India",
      code: "IN",
    },
    name: "State",
    code: "STA",
    max_level: 3,
    level: ["State", "District", "City"],
  },
  {
    id: "CL005",
    country: {
      name: "Germany",
      code: "DE",
    },
    name: "Federal",
    code: "FED",
    max_level: 3,
    level: ["State", "Region", "City"],
  },
]

// Dummy ApiResponse
export const countryLevelsApiResponse: ApiResponseInterface<CountryLevelInterface[]> = {
  data: countryLevels,
  message: "Country levels fetched successfully",
  status: 200,
  meta: {
    total: 5,
    limit: 5,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: 5,
    limit: 5,
    current_page: 1,
    last_page: 1,
  },
}
