import type { ProductCategoryPIInterface } from "@/lib/interfaces/products/product/product-category"

const dummyProductCategories: ProductCategoryPIInterface[] = [
  {
    id: "PC001",
    name: "Electronics",
    code: "ELEC",
    status: "active",
    created_at: Date.now(),
    created_by: 1,
    updated_at: Date.now(),
    updated_by: 1,
    parent: {
      id: "PARENT001",
      name: "Technology",
    },
    valuation: {
      costing_method: {
        id: "CM001",
        name: "Standard Cost",
      },
      inventory_valuation: {
        id: "IV001",
        name: "FIFO",
      },
    },
    account: {
      income: {
        id: "ACC001",
        code: "S001",
        name: "Sales Revenue",
      },
      expense: {
        id: "ACC002",
        code: "E001",
        name: "COGS",
      },
    },
    pos: {
      card_color: "blue",
      show_image: true,
    },
  },
  {
    id: "PC002",
    name: "Apparel",
    code: "APP",
    status: "inactive",
    created_at: Date.now(),
    created_by: 2,
    updated_at: Date.now(),
    updated_by: 2,
    parent: {
      id: "PARENT002",
      name: "Fashion",
    },
    valuation: {
      costing_method: {
        id: "CM002",
        name: "Actual Cost",
      },
      inventory_valuation: {
        id: "IV002",
        name: "LIFO",
      },
    },
    account: {
      income: {
        id: "ACC003",
        code: "S002",
        name: "Sales Apparel",
      },
      expense: {
        id: "ACC004",
        code: "E002",
        name: "COGS Apparel",
      },
    },
    pos: {
      card_color: "green",
      show_image: false,
    },
  },
  // Add more categories as needed
]

// Dummy ApiResponse for Product Categories
export const productCategoriesApiResponse = {
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
