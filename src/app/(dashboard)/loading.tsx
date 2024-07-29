import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-background py-2 text-center">
      <span className="animate-spin">
        <Loader2 size={36} />
      </span>
    </div>
  )
}
