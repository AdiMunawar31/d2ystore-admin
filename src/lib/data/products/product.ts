import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { ProductsPIInterface } from "@/lib/interfaces/products/product/products"

const dummyProducts: ProductsPIInterface = {
  id: "P001",
  name: "Product 1",
  code: "PRD001",
  status: "active",
  timezone: "UTC+7",
  image_url: "https://example.com/image1.jpg",
  tags: ["tag1", "tag2"],
  available_action: ["sell", "purchase"],
  product_type: {
    id: "PT001",
    name: "Type 1",
  },
  pos: {
    card_color: "blue",
  },
  product_category: {
    id: "PC001",
    name: "Category 1",
  },
  product_brand: {
    id: "PB001",
    name: "Brand 1",
  },
  industry: {
    id: "IN001",
    name: "Industry 1",
  },
  external_code: "EXT001",
  cost: 100,
  base_price: 150,
  base_uom: {
    id: "UOM001",
    name: "Unit",
    code: "U",
    format: "Single",
  },
  purchase_uom: {
    id: "UOM002",
    name: "Box",
    code: "B",
    format: "Multiple",
  },
  uom_levels: [
    {
      key: "Level 1",
      id: "UL001",
      name: "Level 1",
      uom: {
        id: "UOM003",
        name: "Pack",
        code: "P",
        format: "Multiple",
      },
      qty: 10,
      convertion: 1,
    },
  ],
  attributes: [
    {
      id: "A001",
      name: "Color",
      values: ["Red", "Blue"],
      pos: {
        card_color: "red",
      },
    },
  ],
  variants: [
    {
      id: "V001",
      code: "VAR001",
      name: "Variant 1",
      status: "active",
      attributes: [
        {
          id: "A001",
          name: "Color",
          value: "Red",
        },
      ],
      cost: 120,
      extra_price: 30,
      final_price: 150,
      final_price_after_tax: 165,
      sku: "SKU001",
      barcode: "BAR001",
    },
  ],
  availability: {
    channels: [
      {
        id: "CH001",
        name: "Online",
        code: "ONL",
        time: [
          {
            id: "T001",
            name: "Morning",
            start_time: "08:00",
            end_time: "12:00",
            days: [1, 2, 3, 4, 5],
            status: "active",
          },
        ],
        sales_types: [
          {
            id: "ST001",
            name: "Retail",
          },
        ],
        regions: [
          {
            id: "R001",
            name: "Region 1",
            branches: [
              {
                id: "B001",
                name: "Branch 1",
              },
            ],
          },
        ],
        branches: [
          {
            id: "B001",
            name: "Branch 1",
          },
        ],
      },
    ],
  },
  inventory: {
    weight: {
      nett: 1,
      gross: 1.2,
      uom: {
        id: "UOM004",
        name: "Kilogram",
        code: "KG",
        format: "Weight",
      },
    },
    volume: {
      product_volume: {
        length: 10,
        width: 5,
        height: 2,
        volume: 100,
        uom: {
          id: "UOM005",
          name: "Cubic Meter",
          code: "CBM",
          format: "Volume",
        },
      },
      packaging_volume: {
        length: 12,
        width: 6,
        height: 3,
        volume: 120,
        uom: {
          id: "UOM006",
          name: "Cubic Centimeter",
          code: "CC",
          format: "Volume",
        },
      },
    },
    storage: {
      storage_condition: {
        id: "SC001",
        name: "Dry",
      },
      temperature_condition: {
        id: "TC001",
        name: "Room Temperature",
      },
      shelf: {
        shelf_life: 12,
        uom: {
          id: "UOM007",
          name: "Month",
          code: "M",
          format: "Time",
        },
      },
    },
  },
  accounting: {
    income_account: {
      id: "ACC001",
      name: "Sales",
      code: "S001",
    },
    expense_account: {
      id: "ACC002",
      name: "COGS",
      code: "C001",
    },
  },
  purchasing: {
    tax: {
      id: "TAX001",
      name: "VAT",
      value: "10%",
    },
    vendors: [
      {
        id: "V001",
        name: "Vendor 1",
        valid_date: "2024-12-31",
      },
    ],
  },
  registration: [
    {
      type: {
        id: "RT001",
        name: "Registration Type 1",
      },
      number: "REG001",
      valid_date_start: "2024-01-01",
      valid_date_end: "2024-12-31",
      attachment: "https://example.com/reg1.pdf",
    },
  ],
  created_at: Date.now(),
  created_by: 1,
  updated_at: Date.now(),
  updated_by: 1,
}
// Add more products as needed

// Dummy ApiResponse for Products
export const productByIdApiResponse: ApiResponseInterface<ProductsPIInterface> = {
  data: dummyProducts,
  message: "Products fetched successfully",
  status: 200,
  meta: {
    total: 1,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: 1,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
