import type { ReactNode } from "react"

export interface NavSidebarInterface {
  icon?: ReactNode
  name: string
  key_name?: string
  link?: string
  children?: NavSidebarInterface[]
  remote_config_code?: string
}
