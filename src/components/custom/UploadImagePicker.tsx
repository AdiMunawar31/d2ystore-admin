import { forwardRef, useImperativeHandle, useRef } from "react"
// import { Loader2 } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"
// import useUpload from "@/api/hermes/upload/useUpload"
import { cn } from "@/lib/utils"
import ImageUpload from "../icons/ImageUpload"

type UploadImagePickerProps = {
  id?: string
  value?: string | null
  onChangeValue?: (url: string) => void
  accept?: string
  wrapClassName?: string
  disabled?: boolean
  isMandatory?: boolean
}

const UploadImagePicker = forwardRef<HTMLInputElement, UploadImagePickerProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ id, disabled, accept = "image/*", value, onChangeValue, wrapClassName, isMandatory }, outerRef) => {
    const innerRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(outerRef, () => innerRef.current!, [])

    // const { mutateAsync, isPending } = useUpload({
    //   onSuccess: (data) => {
    //     const urlImage = getImageUrl(data.path)
    //     if (onChangeValue) onChangeValue(urlImage)
    //   },
    //   onError: () => {
    //     toast.error("Error upload file")
    //   },
    // })

    return (
      <label
        htmlFor={id}
        className={cn(
          `relative flex h-[108px] w-[108px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-primary bg-background hover:bg-primary-lightest`,
          disabled && "cursor-not-allowed bg-neutral-grey-200-bg",
          false && "bg-neutral-grey-200-bg",
          wrapClassName
        )}
      >
        {value ? (
          <Image
            alt="Upload Image"
            src={"https://ui-avatars.com/api/?name=D2Y+OFFICIAL&background=random"}
            fill
            className="object-cover text-sm"
            sizes="100%"
          />
        ) : (
          <>
            <ImageUpload />
            <p className="mt-2 text-center text-xs text-primary">
              {isMandatory && <span className="text-sm text-red-400">*</span>}
              Upload <br /> Image
            </p>
          </>
        )}

        <input
          ref={innerRef}
          id={id}
          type="file"
          accept={accept}
          onChange={async (e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const file: any = e.target.files?.[0]
            if (file?.size > 2000000) {
              toast.error(`Maximal size for image 2Mb`)
              return
            }
            if (file) {
              const renamedFile = new File([file], file.name.replace(/\s+/g, "_"), { type: file.type })
              await console.log({ body: renamedFile })
              return
            }
          }}
          className="hidden"
          disabled={disabled}
        />
      </label>
    )
  }
)

UploadImagePicker.displayName = "UploadImagePicker"

export default UploadImagePicker
