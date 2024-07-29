"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"
import SubmitActionHeaderDraft from "./SubmitActionHeaderDraft"

const ActionHeaderDraft = () => {
  const { productId } = useDraftProductsPIContext()

  return (
    <div className="flex items-center gap-2">
      {productId && (
        <Button variant="outline-primary" asChild>
          <Link href={"/products/products/add"}>Add New</Link>
        </Button>
      )}
      <SubmitActionHeaderDraft />
    </div>
  )
}

export default ActionHeaderDraft
