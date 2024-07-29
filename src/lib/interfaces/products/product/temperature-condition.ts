export interface TemperatureConditionPIInterface {
  id: string
  name: string
  status: "active" | "inactive" | "deleted"
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
}
