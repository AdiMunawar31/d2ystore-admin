"use client"

import { useDraftTargetManagementContext } from "@/providers/menu/target-management/DraftTargetManagementProvider"

const InputNameTargetManagement = () => {
  const { detailTargetManagement, setDetailTargetManagement } = useDraftTargetManagementContext()
  return (
    <div className="flex flex-1 flex-col">
      <input
        type="text"
        value={detailTargetManagement.name}
        className="mb-1 max-w-full text-2xl font-bold outline-none placeholder:text-lg"
        placeholder="Input Target Management Name..."
        onChange={(e) => setDetailTargetManagement((prev) => ({ ...prev, name: e.target.value }))}
      />
      <p className="text-base text-gray-600" style={{ color: "#667A8E" }}>
        {detailTargetManagement?.code || null}
      </p>
    </div>
  )
}

export default InputNameTargetManagement
