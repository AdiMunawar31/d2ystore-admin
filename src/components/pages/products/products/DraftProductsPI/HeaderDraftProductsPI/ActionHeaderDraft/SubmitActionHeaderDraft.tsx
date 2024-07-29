"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const SubmitActionHeaderDraft = () => {
  const router = useRouter()
  // const queryClient = useQueryClient()

  const { productId, detail, basicInfo, availability, inventory, accountPurchase, attributeVariant } =
    useDraftProductsPIContext()

  // const { mutate: mutateCreate, isPending: isPendingCreate } = usePICreateProducts({
  //   onSuccess: () => {
  //     toast.success("Create products success")
  //     router.replace(`/inventory/product/products`)
  //   },
  //   onError: () => {
  //     toast.error("Create products failed")
  //   },
  // })

  // const { mutate: mutateEdit, isPending: isPendingEdit } = usePIEditProducts({
  //   onSuccess: () => {
  //     toast.success("Update products success")
  //     queryClient.invalidateQueries({ queryKey: ["pi-products-by-id"] })
  //   },
  //   onError: () => {
  //     toast.error("Update products failed")
  //   },
  // })

  const handleSubmit = () => {
    if (!detail.name) {
      return toast.error("Product Name is required")
    }

    if (!detail.image_url) {
      return toast.error("Product Image is required")
    }

    if (
      !basicInfo.product_type ||
      /*!basicInfo.pos?.card_color ||*/
      !basicInfo.product_category ||
      !basicInfo.product_brand
    ) {
      return toast.error("Check all required fields in Basic Info - Product Information")
    }

    if (!basicInfo.base_uom || !basicInfo.purchase_uom) {
      return toast.error("Check all required fields in Basic Info - Base Price & UoM")
    }

    // if (basicInfo.useUomLeveling && basicInfo.uom_levels && basicInfo.uom_levels?.length > 0) {
    //   const isAllValidUomLevel = basicInfo.uom_levels.every((obj) =>
    //     isObjectPropertiesComplete(obj)
    //   )

    //   if (!isAllValidUomLevel) {
    //     return toast.error("Check all fields in Basic Info - UoM Leveling")
    //   }
    // }

    // if (
    //   !inventory.storage.storage_condition ||
    //   !inventory.storage.temperature_condition ||
    //   !inventory.storage.shelf?.uom
    // ) {
    //   return toast.error("Check all required fields in Inventory - Product Storage")
    // }

    // if (
    //   !accountPurchase.accounting?.income_account ||
    //   !accountPurchase.accounting?.expense_account
    // ) {
    //   return toast.error("Check all required fields in AccountPurchase - Accounting")
    // }

    // if (!accountPurchase.purchasing?.tax) {
    //   return toast.error("Check all required fields in AccountPurchase - Purchasing")
    // }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const payload = {
      name: detail.name,
      status: detail.status,
      image_url: detail.image_url,
      tags: [],
      available_action: detail.available_action,
      product_type: {
        id: basicInfo.product_type.id,
      },
      pos: {
        card_color: basicInfo.pos?.card_color || "",
      },
      product_category: {
        id: basicInfo.product_category.id,
      },
      product_brand: {
        id: basicInfo.product_brand.id,
      },
      industry: {
        id: basicInfo.industry?.id || "",
      },
      external_code: basicInfo.external_code || "",
      cost: basicInfo.cost || 0,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      base_price: basicInfo.base_price || 0,
      base_uom: {
        id: basicInfo.base_uom.id,
      },
      purchase_uom: {
        id: basicInfo.purchase_uom.id,
      },
      uom_levels: basicInfo.uom_levels
        ? basicInfo.uom_levels.map((obj) => ({
            id: obj?.id || "",
            qty: obj?.qty || 0,
            convertion: obj?.convertion || 0,
            uom: {
              id: obj?.uom?.id || "",
            },
          }))
        : [],
      attributes: attributeVariant.attributes.map((obj) => ({
        id: obj.id,
        values: obj.values,
        pos: {
          card_color: obj.pos?.card_color || "",
        },
      })),
      variants: attributeVariant.variants.map((obj) => ({
        id: obj.id || "",
        code: obj.code || "",
        status: obj.status || "",
        name: obj.name,
        attributes: obj.attributes.map((obj) => ({
          id: obj.id,
        })),
        extra_price: obj.extra_price || 0,
        cost: obj.cost || 0,
        sku: obj.sku,
        barcode: obj.barcode,
      })),
      availability: {
        channels: availability?.channels
          ? availability.channels.map((obj) => ({
              id: obj.id,
              name: obj.name,
              time: obj.time.map((time) => ({
                id: time.id,
                name: time.name,
                start_time: time.start_time,
                end_time: time.end_time,
                days: time.days,
                status: time.status,
              })),
              sales_types: obj.sales_types.map((salesType) => ({
                id: salesType.id,
                name: salesType.name,
              })),
              // regions: obj.regions?.map((region) => ({
              //   id: region.id,
              //   branches: region.branches.map((branch) => ({
              //     id: branch.id,
              //   })),
              // })),
              branches: obj?.branches,
            }))
          : [],
      },
      accounting: {
        income_account: {
          id: accountPurchase.accounting?.income_account.id,
        },
        expense_account: {
          id: accountPurchase.accounting?.expense_account.id,
        },
      },
      purchasing: {
        tax: {
          id: accountPurchase.purchasing?.tax.id,
        },
      },
      inventory: {
        storage: {
          storage_condition: {
            id: inventory.storage?.storage_condition?.id || "",
          },
          temperature_condition: {
            id: inventory.storage?.temperature_condition?.id || "",
          },
          shelf: {
            shelf_life: inventory.storage.shelf?.shelf_life || 0,
            uom: {
              id: inventory.storage?.shelf?.uom?.id || "",
            },
          },
        },
        volume: {
          product_volume: {
            length: inventory.volume.product_volume?.length || 0,
            width: inventory.volume.product_volume?.width || 0,
            height: inventory.volume.product_volume?.height || 0,
            volume: inventory.volume.product_volume?.volume || 0,
            uom: {
              id: inventory.volume.product_volume?.uom?.id || "",
            },
          },
          packaging_volume: {
            length: inventory.volume.packaging_volume?.length || 0,
            width: inventory.volume.packaging_volume?.width || 0,
            height: inventory.volume.packaging_volume?.height || 0,
            volume: inventory.volume.packaging_volume?.volume || 0,
            uom: {
              id: inventory.volume.packaging_volume?.uom?.id || "",
            },
          },
        },
        weight: {
          nett: inventory.weight?.nett || 0,
          gross: inventory.weight?.gross || 0,
          uom: {
            id: inventory.weight?.uom?.id || "",
          },
        },
      },
    }

    // if (productId) {
    //   return mutateEdit({
    //     id: productId,
    //     body: payload,
    //   })
    // }

    // mutateCreate({
    //   body: payload,
    // })

    return
  }

  return (
    <>
      <Button variant="ghost-destructive" onClick={() => router.replace(`/inventory/product/products`)}>
        Cancel
      </Button>
      <Button variant="primary" disabled={basicInfo?.uom_levels?.length === 0} onClick={handleSubmit} isLoading={false}>
        {productId ? "Save Changes" : "Submit"}
      </Button>
    </>
  )
}

export default SubmitActionHeaderDraft
