"use client"

import React, { useRef, useState } from "react"
import { Trash2 } from "lucide-react"
import CustomDialog from "@/components/custom/dialog/CustomDialog"
import FileUpload from "@/components/icons/FileUpload"

const BulkUploadProducts = () => {
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState({
    name: "",
    size: 0,
    type: "",
    lastModified: 0,
  })

  const [, setFileExcel] = useState<File | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      setFile({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      })
      setFileExcel(file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      })
      setFileExcel(file)
    }
  }

  const handleDeleteFile = () => {
    setFile({
      name: "",
      size: 0,
      type: "",
      lastModified: 0,
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <CustomDialog
      textTrigger="Bulk Upload"
      variantTrigger="outline-primary"
      title="Upload Target Management"
      textConfirm="Create"
      onConfirm={() => {}}
      isLoadingConfirm={false}
    >
      <div className="block px-6 py-4">
        <div
          className={`flex min-h-60 items-center justify-center rounded-md border border-[#9CD8F1] p-4 ${dragging ? "bg-gray-100" : ""} flex`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
          {file?.name.length ? (
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-m leading-none text-neutral-grey-600-body-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {file.name}
                </p>
                <p className="text-sm leading-none text-[#667A8E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {Math.round(file.size / 1024)}kb
                </p>
              </div>
              <div
                className="cursor-pointer rounded-md bg-gray-100 p-2"
                onClick={() => handleDeleteFile()}
                role="button"
                aria-label="Delete document"
              >
                <Trash2 className="ml-auto h-4 w-4 shrink-0" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div
                className="bg-primary-accent flex cursor-pointer flex-row items-center gap-2 rounded-md bg-primary-lightest px-4 py-3 text-primary"
                onClick={handleUploadClick}
              >
                <FileUpload />
                <span>Upload file</span>
              </div>
              <p className="text-sm leading-none text-neutral-grey-600-body-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                or drop files here
              </p>
            </div>
          )}
        </div>
      </div>
    </CustomDialog>
  )
}

export default BulkUploadProducts
