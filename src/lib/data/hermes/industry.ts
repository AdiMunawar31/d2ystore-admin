import type { IndustryInterface } from "@/lib/interfaces/hermes/industry"

const dummyIndustries: IndustryInterface[] = [
  {
    id: "IND001",
    name: "Manufacturing",
    status: "active",
    created_at: 1627849200,
    created_by: 1,
    updated_at: 1627849200,
    updated_by: 1,
  },
  {
    id: "IND002",
    name: "Retail",
    status: "active",
    created_at: 1627849200,
    created_by: 2,
    updated_at: 1627849200,
    updated_by: 2,
  },
  {
    id: "IND003",
    name: "Healthcare",
    status: "inactive",
    created_at: 1627849200,
    created_by: 3,
    updated_at: 1627849200,
    updated_by: 3,
  },
  {
    id: "IND004",
    name: "Finance",
    status: "deleted",
    created_at: 1627849200,
    created_by: 4,
    updated_at: 1627849200,
    updated_by: 4,
  },
]

export const industryApiResponse = {
  data: dummyIndustries,
  message: "Industries fetched successfully",
  status: 200,
  meta: {
    total: dummyIndustries.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyIndustries.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
