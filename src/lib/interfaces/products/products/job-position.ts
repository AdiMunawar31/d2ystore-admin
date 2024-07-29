export interface JobPositionInterface {
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
  department: {
    id: string
    name: string
  }
  description: string
  id: string
  inherit: any
  name: string
  status: "active"
  updatedAt: number | Date
  updatedBy: number | Date
}

export interface FormCreateJobPositionInterface {
  company: {
    code: string
    externalId: string
    id: string
    name: string
  }
  createdAt?: number | Date
  createdBy?: number | Date
  deletedAt?: number | Date
  deletedBy?: number | Date
  department: {
    id: string
    name: string
  }
  description: string
  id: string
  // inherit: Salesman,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inherit: any
  name: string
  status?: "active"
  updatedAt?: number | Date
  updatedBy?: number | Date
}
