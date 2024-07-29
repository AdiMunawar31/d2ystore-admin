import type { ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"

const dummyProductBrands: ProductBrandInterface[] = [
  {
    id: "BR001",
    name: "Brand A",
    code: "BA001",
    parent: {
      id: "PB001",
      name: "Parent Brand A",
    },
    status: "active",
    created_at: 1627849200,
    created_by: 1,
    updated_at: 1627849200,
    updated_by: 1,
  },
  {
    id: "BR002",
    name: "Brand B",
    code: "BB001",
    parent: {
      id: "PB002",
      name: "Parent Brand B",
    },
    status: "active",
    created_at: 1627849200,
    created_by: 2,
    updated_at: 1627849200,
    updated_by: 2,
  },
  {
    id: "BR003",
    name: "Brand C",
    code: "BC001",
    parent: {
      id: "PB003",
      name: "Parent Brand C",
    },
    status: "inactive",
    created_at: 1627849200,
    created_by: 3,
    updated_at: 1627849200,
    updated_by: 3,
  },
  {
    id: "BR004",
    name: "Brand D",
    code: "BD001",
    parent: {
      id: "PB004",
      name: "Parent Brand D",
    },
    status: "deleted",
    created_at: 1627849200,
    created_by: 4,
    updated_at: 1627849200,
    updated_by: 4,
  },
]

export const productBrandApiResponse = {
  data: dummyProductBrands,
  message: "Product brands fetched successfully",
  status: 200,
  meta: {
    total: dummyProductBrands.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyProductBrands.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
