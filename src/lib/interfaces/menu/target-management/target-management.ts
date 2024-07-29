export interface DraftTargetManagement {
  id?: string
  code?: string
  name: string
  department?: Info
  job_position?: Info
  employee?: EmployeeInfo
  salesman_division?: Info
  target_details?: DraftTargetMaster
  period?: Date
  target_value?: string
}

export interface Info {
  id: string
  name: string
  inherit?: string
}

export interface EmployeeInfo {
  id: string
  name: string
  code: string
  external_code: string
}

export interface DraftTargetMaster {
  id?: string
  code?: string
  name: string
  interval_type?: Info
  target_unit?: string
  target_description?: string
  department?: Info
  job_position?: Info
  salesman_division?: Info
  achievent_tracker?: string
  tracker_type?: Info
  employee_assigned?: number
}

export interface Info {
  id: string
  name: string
  inherit?: string
}

export interface ITargetManagement {
  id: string
  targetId: string
  targetName: string
  intervalType: string
  achievementTracker: string
  jobPosition: string
  salesDivision: string
  employeeAssigned: string
}

export interface IUpdateAchievementTargetManagement {
  date: Date
  achievementDescr: string
  achievementValue: number
  evidence: string
  evidence_url: string
  employee: string
  verifyBy: string
  verifyDate: Date
  status: string
}

export enum StatusUpdateAchievementTargetManagementEnum {
  WAITING = "Waiting for Verification",
  VERIFIED = "Verified",
}

export interface TargetManagementTableInterface {
  id: string
  assignment_id: string
  employee: EmloyeeInterface
  target_name: string
  progress: string
  target: string
  achievement: string
  gap: string
  status: string
}

interface EmloyeeInterface {
  id: string
  name: string
  type: string
}
