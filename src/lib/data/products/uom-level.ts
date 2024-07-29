import type { UomLevelPIInterface } from "@/lib/interfaces/products/product/uom-level"

const dummyUomLevels: UomLevelPIInterface[] = [
  {
    id: "UL001",
    name: "Base Unit",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
  },
  {
    id: "UL002",
    name: "Pack",
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
  },
  {
    id: "UL003",
    name: "Carton",
    status: "active",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
  },
  {
    id: "UL004",
    name: "Pallet",
    status: "deleted",
    created_at: Date.now(),
    created_by: 4,
    updated_at: Date.now(),
    updated_by: 4,
  },
]

export const uomLevelsApiResponse = {
  data: dummyUomLevels,
  message: "UOM levels fetched successfully",
  status: 200,
  meta: {
    total: dummyUomLevels.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyUomLevels.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}

//   console.log(uomLevelsApiResponse);
