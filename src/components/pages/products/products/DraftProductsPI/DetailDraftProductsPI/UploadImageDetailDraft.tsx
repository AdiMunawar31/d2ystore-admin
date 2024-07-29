"use client"

import UploadImagePicker from "@/components/custom/UploadImagePicker"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const UploadImageDetailDraft = () => {
  const { detail, setDetail } = useDraftProductsPIContext()

  return (
    <UploadImagePicker
      id="image_product"
      value={detail.image_url}
      isMandatory={true}
      onChangeValue={(url) => {
        setDetail((prev) => ({
          ...prev,
          image_url: url,
        }))
      }}
    />
  )
}

export default UploadImageDetailDraft
