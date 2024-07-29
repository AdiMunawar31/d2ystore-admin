import type { UomCategoryInterface } from "@/lib/interfaces/products/product/uom-category"

const dummyUomCategories: UomCategoryInterface[] = [
  {
    id: "UOMCAT001",
    code: "WT",
    name: "Weight",
    description: "Units of measurement for weight",
    uom: "kg",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
  },
  {
    id: "UOMCAT002",
    code: "VOL",
    name: "Volume",
    description: "Units of measurement for volume",
    uom: "litre",
    status: "active",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
  },
  {
    id: "UOMCAT003",
    code: "LEN",
    name: "Length",
    description: "Units of measurement for length",
    uom: "meter",
    status: "inactive",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
  },
]

export const uomCategoriesApiResponse = {
  data: dummyUomCategories,
  message: "UOM categories fetched successfully",
  status: 200,
  meta: {
    total: dummyUomCategories.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyUomCategories.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
