import { Clock5 } from "lucide-react"

type ExportStatusProps = {
  isShowExportStatus: boolean
}

const ExportStatus = ({ isShowExportStatus }: ExportStatusProps) => {
  return (
    <>
      {isShowExportStatus && (
        <div className="mx-4 flex h-10 flex-row items-center gap-2 rounded-md bg-[#FEF5E7] px-4 py-2 text-sm font-medium italic text-[#F59E0B]">
          <Clock5 size={20} />
          Export in Progress
        </div>
      )}
    </>
  )
}

export default ExportStatus
