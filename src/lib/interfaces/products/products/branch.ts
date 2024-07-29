export interface BasicInfoBranchInterface {
  // Definisikan properti yang diperlukan
  phone: string
  email: string
}

export interface AddressBranchInterface {
  // Definisikan properti yang diperlukan
  street: string
  city: string
  state: string
  postal_code: string
}

export interface CoverageBranchInterface {
  // Definisikan properti yang diperlukan
  areas: string[]
}

export interface EWorkBranchInterface {
  // Definisikan properti yang diperlukan
  enabled: boolean
}

export interface POSSettingBranchInterface {
  // Definisikan properti yang diperlukan
  terminal_id: string
}

export interface StationManagementBranchInterface {
  // Definisikan properti yang diperlukan
  stations: string[]
}

export interface BranchInterface {
  id: string
  external_id: string
  name: string
  status: "active" | "inactive" | "deleted"
  show_on_pos: boolean
  show_on_sfa: boolean
  show_on_mitra: boolean
  basic_info: BasicInfoBranchInterface
  address: AddressBranchInterface
  coverage: CoverageBranchInterface
  ework_setting: EWorkBranchInterface
  pos_setting: POSSettingBranchInterface
  station_management: StationManagementBranchInterface
  created_at: string
  created_by: string
  updated_at: string
  updated_by: string
  branch_id?: string
  parent_branch?: {
    id: string
    name: string
    external_id: string
  }
}
