import type { ProductBrandInterface } from "@/lib/interfaces/products/product/product-brand"

const dummyProductBrands: ProductBrandInterface[] = [
  {
    id: "BR001",
    name: "Brand A",
    code: "BR_A",
    parent: {
      id: "PARENT001",
      name: "Parent Brand A",
    },
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
  },
  {
    id: "BR002",
    name: "Brand B",
    code: "BR_B",
    parent: {
      id: "PARENT002",
      name: "Parent Brand B",
    },
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
  },
  {
    id: "BR003",
    name: "Brand C",
    code: "BR_C",
    parent: {
      id: "PARENT001",
      name: "Parent Brand A",
    },
    status: "deleted",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
  },
]

export const productBrandListApiResponse = {
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
