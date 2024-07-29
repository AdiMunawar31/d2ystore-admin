// import { forwardRef, useImperativeHandle, useRef } from "react"
// import { Loader2, Trash2 } from "lucide-react"
// import { toast } from "sonner"
// import type { ResponseUpload } from "@/api/hermes/upload/useUpload"
// import useUpload from "@/api/hermes/upload/useUpload"
// import { cn } from "@/lib/utils"
// import FileUpload from "../icons/FileUpload"
// import { Button } from "../ui/button"
// import { Input } from "../ui/input"
// import { Label } from "../ui/label"

// type DocumentPickerProps = {
//   id?: string
//   value?: string | null
//   onChangeFile?: (file: ResponseUpload | null) => void
//   accept?: string
//   disabled?: boolean
// }

// const DocumentPicker = forwardRef<HTMLInputElement, DocumentPickerProps>(
//   ({ id, disabled, accept = ".pdf", value, onChangeFile }, outerRef) => {
//     const innerRef = useRef<HTMLInputElement>(null)

//     useImperativeHandle(outerRef, () => innerRef.current!, [])

//     const { mutateAsync, isPending } = useUpload({
//       onSuccess: (data) => {
//         if (onChangeFile) onChangeFile(data)
//       },
//       onError: () => {
//         toast.error("Error upload file")
//       },
//     })

//     return (
//       <Input
//         ref={innerRef}
//         id={id}
//         type="file"
//         accept={accept}
//         className={cn("hidden file:hidden disabled:opacity-100")}
//         disabled={disabled || !!value || isPending}
//         wrapClassName={cn("overflow-hidden", !value && "border border-primary")}
//         onChange={async (e) => {
//           const file = e.target.files?.[0]
//           if (file) {
//             await mutateAsync({ body: file })
//             return
//           }
//         }}
//         startContent={
//           value ? (
//             <p className="line-clamp-1 px-3 text-primary">{value}</p>
//           ) : isPending ? (
//             <div className="flex px-3">
//               <span className="animate-spin">
//                 <Loader2 size={20} />
//               </span>
//             </div>
//           ) : (
//             <Label
//               htmlFor={id}
//               onClick={() => {
//                 if (!id) {
//                   innerRef.current?.click()
//                 }
//               }}
//               className={cn(
//                 "flex h-full grow items-center rounded-md px-3 text-primary hover:bg-accent",
//                 !disabled && "cursor-pointer"
//               )}
//             >
//               <div className="flex grow items-center gap-2">
//                 <FileUpload />
//                 Upload Document
//               </div>
//             </Label>
//           )
//         }
//         endContent={
//           !!value && (
//             <Button
//               variant={"ghost-destructive"}
//               className="h-full cursor-pointer px-2"
//               onClick={() => {
//                 if (innerRef.current) innerRef.current.value = ""
//                 onChangeFile && onChangeFile(null)
//               }}
//             >
//               <Trash2 className="ml-auto h-4 w-4 shrink-0" />
//             </Button>
//           )
//         }
//       />
//     )
//   }
// )

// DocumentPicker.displayName = "DocumentPicker"

// export default DocumentPicker
