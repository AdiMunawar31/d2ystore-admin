import type { Table } from "@tanstack/react-table"
import { Loader2 } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"

type LoadingDataBodyProps<T> = {
  table: Table<T>
}

// eslint-disable-next-line @typescript-eslint/ban-types
const LoadingDataBody = <T extends {}>({ table }: LoadingDataBodyProps<T>) => {
  return (
    <TableRow>
      <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
        <div className="flex flex-1 items-center justify-center">
          <span className="animate-spin">
            <Loader2 size={36} />
          </span>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default LoadingDataBody
