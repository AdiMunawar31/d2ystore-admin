"use client"

import HeaderTargetManagement from "@/components/pages/menu/target-management/HeaderTargetManagement"
import TableTargetManagement from "@/components/pages/menu/target-management/TableTargetManagement"
import { TargetManagementProvider } from "@/providers/menu/target-management/TargetManagementProvider"

export default function TargetManagementPage() {
  return (
    <>
      <TargetManagementProvider>
        <HeaderTargetManagement />
        <TableTargetManagement />
      </TargetManagementProvider>
    </>
  )
}
