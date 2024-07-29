import type { UnitOfMeasureInterface } from "@/lib/interfaces/products/product/unit-of-measure"

const dummyUnitOfMeasures: UnitOfMeasureInterface[] = [
  {
    id: "UOM001",
    code: "kg",
    name: "Kilogram",
    format: "reference",
    status: "active",
    uom: "kg",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
    format_numbering: {
      ratio: 1,
      type: "reference",
      rounding: 0.01,
    },
    uom_category: {
      id: "UOMCAT001",
      name: "Weight",
    },
  },
  {
    id: "UOM002",
    code: "g",
    name: "Gram",
    format: "smaller",
    status: "active",
    uom: "g",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
    format_numbering: {
      ratio: 1000,
      type: "smaller",
      rounding: 0.001,
    },
    uom_category: {
      id: "UOMCAT001",
      name: "Weight",
    },
  },
  {
    id: "UOM003",
    code: "lb",
    name: "Pound",
    format: "bigger",
    status: "inactive",
    uom: "lb",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
    format_numbering: {
      ratio: 2.20462,
      type: "bigger",
      rounding: 0.1,
    },
    uom_category: {
      id: "UOMCAT001",
      name: "Weight",
    },
  },
]

export const unitOfMeasuresApiResponse = {
  data: dummyUnitOfMeasures,
  message: "Unit of measures fetched successfully",
  status: 200,
  meta: {
    total: dummyUnitOfMeasures.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyUnitOfMeasures.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
