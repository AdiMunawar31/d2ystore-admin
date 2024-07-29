"use client"

import type { FC } from "react"
import CustomBarChart from "@/components/custom/CustomBarChart"
import { Card } from "@/components/ui/card"

export interface CardChartBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // Notes (qodana) : unused children
  // children?: any
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardChartBar: FC<CardChartBarProps> = ({ data, title }) => {
  return (
    <Card className="flex-col divide-y divide-gray-200">
      <p className="flex p-4 text-lg font-bold text-gray-500">{title}</p>

      <div className="px-2 py-6">
        <div className="my-5 flex justify-center">
          <CustomBarChart data={data} dataKeyBar={["Omzet", "IPT", "EC"]} />
        </div>
      </div>
    </Card>
  )
}

export default CardChartBar
