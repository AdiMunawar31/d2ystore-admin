import type { StorageConditionPIInterface } from "@/lib/interfaces/products/product/storage-condition"

const dummyStorageConditions: StorageConditionPIInterface[] = [
  {
    id: "SC001",
    name: "Refrigerated",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
  },
  {
    id: "SC002",
    name: "Frozen",
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
  },
  {
    id: "SC003",
    name: "Ambient",
    status: "active",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
  },
  {
    id: "SC004",
    name: "Dry",
    status: "deleted",
    created_at: Date.now(),
    created_by: 4,
    updated_at: Date.now(),
    updated_by: 4,
  },
]

export const storageConditionsApiResponse = {
  data: dummyStorageConditions,
  message: "Storage conditions fetched successfully",
  status: 200,
  meta: {
    total: dummyStorageConditions.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyStorageConditions.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
