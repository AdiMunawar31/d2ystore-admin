import React from "react"
import AddTargetManagement from "./AddTargetManagement"
import BulkUploadTargetManagement from "./BulkUploadTargetManagement"
import PaginationTargetManagement from "./PaginationTargetManagement"

const ActionHeaderTargetManagement = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <PaginationTargetManagement />
        <BulkUploadTargetManagement />
        <AddTargetManagement />
      </div>
    </>
  )
}

export default ActionHeaderTargetManagement
