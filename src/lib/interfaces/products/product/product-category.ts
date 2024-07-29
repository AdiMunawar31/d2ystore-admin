export interface ProductCategoryPIInterface {
  id: string
  name: string
  code: string
  status: "active" | "inactive" | "deleted"
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
  parent: {
    id: string
    name: string
  }
  valuation: {
    costing_method: {
      id: string
      name: string
    }
    inventory_valuation: {
      id: string
      name: string
    }
  }
  account: {
    income: {
      id: string
      code: string
      name: string
    }
    expense: {
      id: string
      code: string
      name: string
    }
  }
  pos: {
    card_color: string
    show_image: boolean
  }
}

export interface FormProductCategoryPIInterface {
  name: string
  parent?: {
    id: string
    name: string
  }
  costingMethod: {
    id: string
    name: string
  }
  inventoryValuation: {
    id: string
    name: string
  }
  // incomeAccount: {
  //   id: string
  //   name: string
  // }
  // expenseAccount: {
  //   id: string
  //   name: string
  // }
  // colorPOS: string
  // showImagePOS: "yes" | "no"
}
