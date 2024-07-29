import type { FC, ReactNode } from "react"
import { cn, convertToInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type AvatarUserProps = {
  name: string | undefined
  image?: string | undefined
  wrapClassName?: string
  avatarClassName?: string
  nameClassName?: string
  descriptionContent?: ReactNode
  removeDescription?: boolean
  isOnline?: boolean
}

const AvatarUser: FC<AvatarUserProps> = ({
  name,
  image,
  wrapClassName,
  avatarClassName,
  nameClassName,
  descriptionContent,
  removeDescription,
  isOnline,
}) => {
  return (
    <div className={cn("flex items-center gap-3", wrapClassName)}>
      <Avatar className={cn(`relative h-8 w-8 !overflow-visible`, avatarClassName)}>
        {image && <AvatarImage src={image} />}
        <AvatarFallback>{convertToInitials(name || "")}</AvatarFallback>
        {isOnline ? (
          <div className="absolute bottom-1 right-0 z-10 h-[20%] w-[20%] rounded-full bg-[#43CC90]" />
        ) : (
          <div className="absolute bottom-1 right-0 z-10 h-[20%] w-[20%] rounded-full bg-gray-400" />
        )}
      </Avatar>

      {!removeDescription && (
        <div className="flex flex-col items-start text-left">
          <h3 className={cn(`overflow-hidden text-ellipsis font-semibold`, nameClassName)}>{name}</h3>

          {descriptionContent}
        </div>
      )}
    </div>
  )
}

export default AvatarUser
