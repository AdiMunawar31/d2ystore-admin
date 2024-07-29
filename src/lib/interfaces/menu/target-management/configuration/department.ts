export interface DepartmentInterface {
  company: {
    code: string
    externalId: string
    id: string
    name: string
  }
  createdAt: number | Date
  createdBy: number | Date
  deletedAt: number | Date
  deletedBy: number | Date
  description: string
  id: string
  name: string
  status: "active"
  updatedAt: number | Date
  updatedBy: number | Date
}
