import type { ProductTypePIInterface } from "@/lib/interfaces/products/product/product-type"

const dummyProductTypes: ProductTypePIInterface[] = [
  {
    id: "PT001",
    name: "Electronics",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
  },
  {
    id: "PT002",
    name: "Furniture",
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
  },
  {
    id: "PT003",
    name: "Apparel",
    status: "deleted",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
  },
  // Add more product types as needed
]

// Dummy ApiResponse for Product Types
export const productTypesApiResponse = {
  data: dummyProductTypes,
  message: "Product types fetched successfully",
  status: 200,
  meta: {
    total: dummyProductTypes.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyProductTypes.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
