export interface UnitOfMeasureInterface {
  id: string
  code: string
  name: string
  format: "reference" | "bigger" | "smaller"
  status: "active" | "inactive" | "deleted"
  uom: string
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
  format_numbering: FormatNumberingInterface
  uom_category: {
    id: string
    name: string
  }
}

export interface FormatNumberingInterface {
  ratio: number
  type: string
  rounding: number
}

export interface FormUnitOfMeasureInterface {
  name: string
  format: string
  status: string
  uomCategory: {
    id: string
    name: string
  }
  formatNumbering: {
    type: string
    ratio: number
    rounding: number
  }
}
