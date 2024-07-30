import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"

const dummyProductCategories: ProductCategoryPIInterface[] = [
  {
    id: "CAT001",
    name: "Category A",
    code: "CAT_A",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
    parent: {
      id: "PARENT_CAT001",
      name: "Parent Category A",
    },
    valuation: {
      costing_method: {
        id: "COST_METHOD001",
        name: "FIFO",
      },
      inventory_valuation: {
        id: "INV_VAL001",
        name: "Perpetual",
      },
    },
    account: {
      income: {
        id: "INC_ACC001",
        code: "INC001",
        name: "Income Account A",
      },
      expense: {
        id: "EXP_ACC001",
        code: "EXP001",
        name: "Expense Account A",
      },
    },
    pos: {
      card_color: "#FF5733",
      show_image: true,
    },
  },
  {
    id: "CAT002",
    name: "Category B",
    code: "CAT_B",
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
    parent: {
      id: "PARENT_CAT002",
      name: "Parent Category B",
    },
    valuation: {
      costing_method: {
        id: "COST_METHOD002",
        name: "LIFO",
      },
      inventory_valuation: {
        id: "INV_VAL002",
        name: "Periodic",
      },
    },
    account: {
      income: {
        id: "INC_ACC002",
        code: "INC002",
        name: "Income Account B",
      },
      expense: {
        id: "EXP_ACC002",
        code: "EXP002",
        name: "Expense Account B",
      },
    },
    pos: {
      card_color: "#33FF57",
      show_image: false,
    },
  },
  {
    id: "CAT003",
    name: "Category C",
    code: "CAT_C",
    status: "deleted",
    created_at: Date.now(),
    created_by: 3,
    updated_at: Date.now(),
    updated_by: 3,
    parent: {
      id: "PARENT_CAT003",
      name: "Parent Category C",
    },
    valuation: {
      costing_method: {
        id: "COST_METHOD003",
        name: "Average",
      },
      inventory_valuation: {
        id: "INV_VAL003",
        name: "Standard",
      },
    },
    account: {
      income: {
        id: "INC_ACC003",
        code: "INC003",
        name: "Income Account C",
      },
      expense: {
        id: "EXP_ACC003",
        code: "EXP003",
        name: "Expense Account C",
      },
    },
    pos: {
      card_color: "#3357FF",
      show_image: true,
    },
  },
]

export const productCategoryListApiResponse = {
  data: dummyProductCategories,
  message: "Product categories fetched successfully",
  status: 200,
  meta: {
    total: dummyProductCategories.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyProductCategories.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
