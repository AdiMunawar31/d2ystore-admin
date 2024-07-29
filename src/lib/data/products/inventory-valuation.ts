import type { InventoryValuationPIInterface } from "@/lib/interfaces/products/product/inventory-valuation"

const dummyInventoryValuations: InventoryValuationPIInterface[] = [
  {
    id: "INV001",
    name: "FIFO",
    status: "active",
    created_at: 1627849200,
    created_by: 1,
    updated_at: 1627849200,
    updated_by: 1,
  },
  {
    id: "INV002",
    name: "LIFO",
    status: "active",
    created_at: 1627849200,
    created_by: 2,
    updated_at: 1627849200,
    updated_by: 2,
  },
  {
    id: "INV003",
    name: "Weighted Average",
    status: "inactive",
    created_at: 1627849200,
    created_by: 3,
    updated_at: 1627849200,
    updated_by: 3,
  },
  {
    id: "INV004",
    name: "Specific Identification",
    status: "deleted",
    created_at: 1627849200,
    created_by: 4,
    updated_at: 1627849200,
    updated_by: 4,
  },
]

export const inventoryValuationApiResponse = {
  data: dummyInventoryValuations,
  message: "Inventory valuations fetched successfully",
  status: 200,
  meta: {
    total: dummyInventoryValuations.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyInventoryValuations.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
