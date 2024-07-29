"use client"

import React from "react"
import type { FC } from "react"
import { useRef, useState } from "react"
import { Trash2, Upload } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Dialog, DialogContent } from "../ui/dialog"

type Props = {
  image: string | null
  onDeleteImage?: () => void
  setFile?: (file: File) => void
  description?: string
  rules?: {
    width?: number
    height?: number
  }
}

const UploadDragnDrop: FC<Props> = (props) => {
  const { image, setFile, onDeleteImage, description, rules } = props
  const [openPreview, setOpenPreview] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [fileDetail, setFileDetail] = useState({
    name: "",
    size: 0,
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSetFile = (file: File | null) => {
    if (file) {
      setFileDetail({
        name: file.name,
        size: +(file.size / 1024).toFixed(2),
      })

      if (setFile) {
        setFile(file)
      }
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    handleSetFile(file)
    event.target.files = null
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files && event.dataTransfer.files[0]
    handleSetFile(file)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleDeleteImage = () => {
    setOpenDelete(false)
    if (onDeleteImage) {
      onDeleteImage()
    }
  }

  const imgWidth = rules?.width || 240
  const imgHeight = rules?.height || 286

  return (
    <>
      {image ? (
        <div className="flex flex-row items-center justify-between rounded-md bg-neutral-grey-200-bg p-3">
          <div className="flex items-center justify-center gap-4">
            <div className="h-20 w-auto rounded-md bg-white p-2">
              <Image
                width={imgWidth}
                height={imgHeight}
                src={image}
                alt="Uploaded"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p>{fileDetail.name || "-"}</p>
              <div className="flex items-center gap-2">
                <p onClick={() => setOpenPreview(true)} className="cursor-pointer text-sm text-primary">
                  Preview
                </p>
                <div className="h-1 w-1 rounded-full bg-neutral-grey-600-body-text" />
                <p className="text-sm text-neutral-grey-600-body-text">{fileDetail.size} KB</p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              setOpenDelete(true)
            }}
          >
            <Trash2 size={20} color="#f43f5e" />
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleUploadClick}
          className="rounded-md border-2 border-dashed px-5 py-5"
        >
          <div className="flex cursor-pointer items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Upload size={22} color="#27AAE1" />
              <h4 className="text-sm font-bold">
                Drag and drop image, or <span className="text-primary">Browse</span>
              </h4>
              <p className="text-xs">{description || "Jpg or png with Images size 240 X 286 px"}</p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept=".jpg,.jpeg,.png"
          />
        </div>
      )}

      <Dialog open={openPreview} onOpenChange={setOpenPreview}>
        <DialogContent className="sm:max-w-[425px]">
          <div>
            {image && (
              <div className="p-2">
                <Image
                  width={imgWidth}
                  height={imgHeight}
                  src={image}
                  alt="Uploaded image"
                  className="h-full w-full object-cover"
                />
                <p className="mt-3 text-center">{fileDetail?.name || "-"}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="sm:max-w-[400px] [&>button]:hidden">
          <div className="px-4">
            <div className="py-6">
              <h4 className="text-center font-semibold">Delete Image</h4>
              <p className="text-center text-neutral-grey-600-body-text">Apa kamu yakin akan menghapus Image ini?</p>
            </div>
            <div className="flex items-center justify-center gap-2 py-3">
              <Button className="w-full" onClick={() => setOpenDelete(false)} variant="outline-primary">
                Batal
              </Button>
              <Button className="w-full" onClick={handleDeleteImage} variant="destructive">
                Ya, Hapus
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UploadDragnDrop
