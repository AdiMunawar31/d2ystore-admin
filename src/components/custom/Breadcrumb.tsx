import Link from "next/link"
import { cn } from "@/lib/utils"

type BreadcrumbProps = {
  data: {
    label: string
    link: string
  }[]
}

const Breadcrumb = ({ data }: BreadcrumbProps) => {
  return (
    <ul className="inline-flex items-center text-sm">
      {data.map((item, index) => {
        const isLastIndex = data.length - 1 === index

        return (
          <li key={index} className="flex items-center">
            <Link
              href={item.link}
              className={cn(
                "pointer-events-none text-sm",
                !isLastIndex && "pointer-events-auto font-medium text-main-blue"
              )}
            >
              <span>{item.label}</span>
            </Link>

            {!isLastIndex && <span className="px-1">/</span>}
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumb
