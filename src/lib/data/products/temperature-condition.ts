import type { TemperatureConditionPIInterface } from "@/lib/interfaces/products/product/temperature-condition"

const dummyTemperatureConditions: TemperatureConditionPIInterface[] = [
  {
    id: "TC001",
    name: "Cold",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
  },
  {
    id: "TC002",
    name: "Freezing",
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
  },
  {
    id: "TC003",
    name: "Room Temperature",
    status: "active",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
  },
  {
    id: "TC004",
    name: "Hot",
    status: "deleted",
    created_at: Date.now(),
    created_by: 4,
    updated_at: Date.now(),
    updated_by: 4,
  },
]

export const temperatureConditionsApiResponse = {
  data: dummyTemperatureConditions,
  message: "Temperature conditions fetched successfully",
  status: 200,
  meta: {
    total: dummyTemperatureConditions.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyTemperatureConditions.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
