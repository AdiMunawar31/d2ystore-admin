import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

type PaginationProps = {
  onPrev?: (page: number) => void
  onNext?: (page: number) => void
  currentPage?: number
  itemsPerPage?: number
  totalItems?: number
  removeTotalItems?: boolean
}

const Pagination = ({
  onPrev = () => {},
  onNext = () => {},
  currentPage = 0,
  itemsPerPage = 0,
  totalItems = 0,
  removeTotalItems,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems)

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        onClick={() => onPrev(currentPage - 1)}
        className="p-2 text-primary"
        disabled={currentPage <= 1}
      >
        <ChevronLeft size={24} />
      </Button>

      <p className="whitespace-nowrap text-sm">
        <span>
          {totalItems > 0 ? startItem : 0} - {endItem}
        </span>{" "}
        {!removeTotalItems && <span> / {totalItems || 0}</span>}
      </p>

      <Button
        variant="ghost"
        onClick={() => onNext(currentPage + 1)}
        className="p-2 text-primary"
        disabled={totalItems > 0 ? currentPage === totalPages : true}
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  )
}

export default Pagination
