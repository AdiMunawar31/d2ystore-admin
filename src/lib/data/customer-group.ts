import type { ApiResponseInterface } from "../interfaces/api"
import type { CustomerGroupEntityInterface } from "../interfaces/products/products/customer-group"

const dummyCustomerGroupData: CustomerGroupEntityInterface[] = [
  {
    id: "CG001",
    name: "VIP Customers",
    code: "VIP",
    status: "active",
    external_code: "VIP001",
    parent: {
      id: "CGP001",
      name: "Premium Customers",
    },
    associated_customers: 150,
    customers: [], // Isi sesuai kebutuhan
    geo_location: {
      province: "California",
      city: "San Francisco",
      district: "District 1",
      zone: "Zone A",
    },
    basic_transaction: {
      last_transaction: "2024-07-18T00:00:00Z",
      period_transaction: {
        id: "P001",
        name: "Quarter 1",
      },
      start_date_transaction: "2024-01-01T00:00:00Z",
      end_date_transaction: "2024-03-31T23:59:59Z",
      start_amount_transaction: 1000,
      end_amount_transaction: 5000,
      start_total_amount_transaction: 5000,
      end_total_amount_transaction: 25000,
      start_total_count_transaction: 10,
      end_total_count_transaction: 50,
      payment_method: "Credit Card",
      product: "Electronics",
      product_category: "Gadgets",
      uom: "Pieces",
    },
    advanced_tansaction: {
      promotion_type: "Discount",
      promotion_specific: "Summer Sale",
      shipping_method: "Express",
      order_status: "Completed",
    },
    group_rules: true,
    created_at: 1625097600,
    created_by: 1,
    updated_at: 1625097600,
    updated_by: 1,
  },
  // Tambahkan 4 dummy data lainnya sesuai dengan format di atas
  {
    id: "CG002",
    name: "Loyal Customers",
    code: "LOYAL",
    status: "active",
    external_code: "LOYAL001",
    parent: {
      id: "CGP002",
      name: "Regular Customers",
    },
    associated_customers: 200,
    customers: [], // Isi sesuai kebutuhan
    geo_location: {
      province: "Texas",
      city: "Austin",
      district: "District 2",
      zone: "Zone B",
    },
    basic_transaction: {
      last_transaction: "2024-06-30T00:00:00Z",
      period_transaction: {
        id: "P002",
        name: "Quarter 2",
      },
      start_date_transaction: "2024-04-01T00:00:00Z",
      end_date_transaction: "2024-06-30T23:59:59Z",
      start_amount_transaction: 1500,
      end_amount_transaction: 6000,
      start_total_amount_transaction: 7500,
      end_total_amount_transaction: 30000,
      start_total_count_transaction: 15,
      end_total_count_transaction: 60,
      payment_method: "PayPal",
      product: "Clothing",
      product_category: "Apparel",
      uom: "Units",
    },
    advanced_tansaction: {
      promotion_type: "Coupon",
      promotion_specific: "Winter Sale",
      shipping_method: "Standard",
      order_status: "Shipped",
    },
    group_rules: true,
    created_at: 1625184000,
    created_by: 2,
    updated_at: 1625184000,
    updated_by: 2,
  },
  {
    id: "CG003",
    name: "New Customers",
    code: "NEW",
    status: "active",
    external_code: "NEW001",
    parent: {
      id: "CGP003",
      name: "All Customers",
    },
    associated_customers: 50,
    customers: [], // Isi sesuai kebutuhan
    geo_location: {
      province: "New York",
      city: "New York",
      district: "District 3",
      zone: "Zone C",
    },
    basic_transaction: {
      last_transaction: "2024-05-20T00:00:00Z",
      period_transaction: {
        id: "P003",
        name: "Quarter 3",
      },
      start_date_transaction: "2024-07-01T00:00:00Z",
      end_date_transaction: "2024-09-30T23:59:59Z",
      start_amount_transaction: 2000,
      end_amount_transaction: 7000,
      start_total_amount_transaction: 10000,
      end_total_amount_transaction: 35000,
      start_total_count_transaction: 20,
      end_total_count_transaction: 70,
      payment_method: "Debit Card",
      product: "Home Appliances",
      product_category: "Kitchen",
      uom: "Items",
    },
    advanced_tansaction: {
      promotion_type: "Bundle",
      promotion_specific: "Spring Sale",
      shipping_method: "Overnight",
      order_status: "Pending",
    },
    group_rules: true,
    created_at: 1625270400,
    created_by: 3,
    updated_at: 1625270400,
    updated_by: 3,
  },
  {
    id: "CG004",
    name: "Seasonal Customers",
    code: "SEASONAL",
    status: "active",
    external_code: "SEASONAL001",
    parent: {
      id: "CGP004",
      name: "Occasional Customers",
    },
    associated_customers: 80,
    customers: [], // Isi sesuai kebutuhan
    geo_location: {
      province: "Florida",
      city: "Miami",
      district: "District 4",
      zone: "Zone D",
    },
    basic_transaction: {
      last_transaction: "2024-04-15T00:00:00Z",
      period_transaction: {
        id: "P004",
        name: "Quarter 4",
      },
      start_date_transaction: "2024-10-01T00:00:00Z",
      end_date_transaction: "2024-12-31T23:59:59Z",
      start_amount_transaction: 2500,
      end_amount_transaction: 8000,
      start_total_amount_transaction: 12500,
      end_total_amount_transaction: 40000,
      start_total_count_transaction: 25,
      end_total_count_transaction: 80,
      payment_method: "Cash",
      product: "Furniture",
      product_category: "Living Room",
      uom: "Sets",
    },
    advanced_tansaction: {
      promotion_type: "Cashback",
      promotion_specific: "Autumn Sale",
      shipping_method: "Same Day",
      order_status: "Processing",
    },
    group_rules: true,
    created_at: 1625356800,
    created_by: 4,
    updated_at: 1625356800,
    updated_by: 4,
  },
  {
    id: "CG005",
    name: "Corporate Customers",
    code: "CORPORATE",
    status: "active",
    external_code: "CORPORATE001",
    parent: {
      id: "CGP005",
      name: "Business Customers",
    },
    associated_customers: 300,
    customers: [], // Isi sesuai kebutuhan
    geo_location: {
      province: "Illinois",
      city: "Chicago",
      district: "District 5",
      zone: "Zone E",
    },
    basic_transaction: {
      last_transaction: "2024-03-10T00:00:00Z",
      period_transaction: {
        id: "P005",
        name: "Quarter 5",
      },
      start_date_transaction: "2024-11-01T00:00:00Z",
      end_date_transaction: "2024-11-30T23:59:59Z",
      start_amount_transaction: 3000,
      end_amount_transaction: 9000,
      start_total_amount_transaction: 15000,
      end_total_amount_transaction: 45000,
      start_total_count_transaction: 30,
      end_total_count_transaction: 90,
      payment_method: "Bank Transfer",
      product: "Office Supplies",
      product_category: "Stationery",
      uom: "Boxes",
    },
    advanced_tansaction: {
      promotion_type: "Gift",
      promotion_specific: "Holiday Sale",
      shipping_method: "Two Day",
      order_status: "Delivered",
    },
    group_rules: true,
    created_at: 1625443200,
    created_by: 5,
    updated_at: 1625443200,
    updated_by: 5,
  },
]

// Dummy ApiResponse
export const customerGroupApiResponse: ApiResponseInterface<CustomerGroupEntityInterface[]> = {
  data: dummyCustomerGroupData,
  message: "Customer groups fetched successfully",
  status: 200,
  meta: {
    total: dummyCustomerGroupData.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyCustomerGroupData.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
