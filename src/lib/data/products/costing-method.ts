import type { CostingMethodPIInterface } from "@/lib/interfaces/products/product/costing-method"

const dummyCostingMethods: CostingMethodPIInterface[] = [
  {
    id: "CM001",
    name: "Standard Costing",
    status: "active",
    created_at: 1627849200,
    created_by: 1,
    updated_at: 1627849200,
    updated_by: 1,
  },
  {
    id: "CM002",
    name: "Activity Based Costing",
    status: "active",
    created_at: 1627849200,
    created_by: 2,
    updated_at: 1627849200,
    updated_by: 2,
  },
  {
    id: "CM003",
    name: "Job Order Costing",
    status: "inactive",
    created_at: 1627849200,
    created_by: 3,
    updated_at: 1627849200,
    updated_by: 3,
  },
  {
    id: "CM004",
    name: "Process Costing",
    status: "deleted",
    created_at: 1627849200,
    created_by: 4,
    updated_at: 1627849200,
    updated_by: 4,
  },
]

export const costingMethodApiResponse = {
  data: dummyCostingMethods,
  message: "Costing methods fetched successfully",
  status: 200,
  meta: {
    total: dummyCostingMethods.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyCostingMethods.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
