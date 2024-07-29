"use client"

import { ChevronDown } from "lucide-react"
import CustomAlertDialog from "@/components/custom/dialog/CustomAlertDialog"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ActionDetailDraft = () => {
  // const router = useRouter()

  const { productId, dataProducts, detail, setDetail } = useDraftProductsPIContext()

  // const { mutateAsync, isPending } = usePIDeleteProducts({
  //   onSuccess: () => {
  //     toast.success("Success delete product")
  //     router.replace("/inventory/product/products")
  //   },
  //   onError: () => {
  //     toast.error("Error delete product")
  //   },
  // })

  return (
    <div className="ml-auto flex items-center gap-2 self-start">
      {productId && !dataProducts?.product_brand?.name && (
        <CustomAlertDialog
          variantTrigger="outline-destructive"
          textTrigger="Delete"
          title="Confirmation Delete"
          description="Are you agree to delete the data?"
          warning="Delete data will affect to other related data"
          isLoadingConfirm={false}
          onConfirm={async () => {}}
        />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={detail.status === "active" ? "outline-success" : "outline-destructive"}
            className="gap-1 px-3 py-2"
          >
            {detail.status !== "active" ? "Inactive" : "Active"}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            checked={detail.status === "active"}
            onCheckedChange={(value) => {
              if (value) {
                setDetail((prev) => ({ ...prev, status: "active" }))
              }
            }}
            className="cursor-pointer justify-end"
          >
            Active
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={detail.status === "inactive"}
            onCheckedChange={(value) => {
              if (value) {
                setDetail((prev) => ({ ...prev, status: "inactive" }))
              }
            }}
            className="cursor-pointer justify-end"
          >
            Inactive
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ActionDetailDraft
