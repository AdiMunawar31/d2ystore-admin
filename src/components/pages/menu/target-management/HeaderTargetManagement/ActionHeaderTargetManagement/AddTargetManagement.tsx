import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const AddTargetManagement = () => {
  return (
    <>
      <div>
        <Button variant="primary" asChild>
          <Link href={"/menu/target-management/add"} className="cursor-pointer">
            Assign Target
          </Link>
        </Button>
      </div>
    </>
  )
}

export default AddTargetManagement
