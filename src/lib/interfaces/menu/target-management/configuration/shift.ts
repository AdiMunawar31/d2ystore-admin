export interface ShiftInterface {
  id: string
  name: string
  status: "active" | "inactive"
  color: string
  start_shift: string
  end_shift: string
  shift_color: string
  schedule_in: string | Date
  schedule_out: string | Date
  description: string
  attendance_validation?: boolean
  check_in?: string | Date
  check_out?: string | Date
  grace_period?: boolean
  check_in_dispensation?: string | Date
  check_out_dispensation?: string | Date
}
