import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"
import { formatPercent } from "@/lib/utils/formatters"

const CustomPieChart = dynamic(() => import("@/components/custom/CustomPieChart"), { ssr: false })

type ProgressCellProps = {
  progress: string
}

const ProgressCell = ({ progress }: ProgressCellProps) => {
  const progressValue = parseFloat(progress)
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={cn(
          "font-semibold",
          progressValue > 50 && "text-[#5ABC48]",
          progressValue < 50 && "text-[#E73C5D]",
          progressValue == 50 && "text-[#EE9E1E]",
          progressValue == 0 && "text-[#C5D0DF]"
        )}
      >{`${formatPercent(progressValue)}%`}</span>
      <CustomPieChart
        data={[
          {
            name: "Progress",
            value: progressValue,
          },
          {
            name: "",
            value: 100 - progressValue,
          },
        ]}
        colors={["#27AAE1", "#E9F7FC"]}
        width={30}
        height={30}
        thickness={6}
      />
    </div>
  )
}

export default ProgressCell
