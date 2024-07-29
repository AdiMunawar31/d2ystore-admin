"use client"

import Pagination from "@/components/custom/Pagination"

const PaginationTargetManagement = () => {
  return (
    <>
      <Pagination currentPage={1} itemsPerPage={10} totalItems={10} onPrev={() => {}} onNext={() => {}} />
    </>
  )
}

export default PaginationTargetManagement
