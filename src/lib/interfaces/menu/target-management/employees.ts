export interface EmployeesInterface {
  branches: EmployeeBranchInterface[]
  employee_id: string
  employee_number: string
  createdAt: number | Date
  createdBy: number | Date
  deletedAt: number | Date
  deletedBy: number | Date
  company?: {
    id: string
    name: string
    code: string
    external_id: string
  }
  department: {
    id: string
    name: string
  }
  email: string
  employee_status: string
  external_code: string
  id: string
  job_position: {
    id: string
    name: string
    inherit?: string
  }
  join_date: string
  name: string
  phone_number: string
  photo: string
  resign_date: string
  identity_number: string
  status: "active" | "inactive"
  tax_number: string
  title: string
  updatedAt: number | Date
  updatedBy: number | Date | string
  salesman_division?: EmployeeSalesmanDivisionInterface[]
  sso_id?: number
}

export interface EmployeeBranchInterface {
  code: string
  id: string
  name: string
}

export interface EmployeeSalesmanDivisionInterface {
  code: string
  id: string
  name: string
}

export interface DetailDraftEmployeeInterface {
  branches: EmployeeBranchInterface[]
  employee_id: string
  employee_number: string
  department: {
    id: string
    name: string
  }
  company?: {
    id: string
    name: string
    code: string
    external_id: string
  }
  email: string
  employee_status: "Full-Time" | "Contract" | string
  external_code: string
  id?: string
  job_position: {
    id: string
    name: string
    inherit?: string
  }
  join_date: string
  name: string
  phone_number: string
  photo: string
  resign_date: string | Date
  identity_number: string //nik
  status: "active" | "inactive" | "deleted" | ""
  tax_number: string
  title: "Mr." | "Mrs." | "Miss" | "Ms." | string
  salesman_division: EmployeeSalesmanDivisionInterface[]
  sso_id?: number
}
