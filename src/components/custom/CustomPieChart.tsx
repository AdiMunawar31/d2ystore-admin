"use client"

import type { FC, HTMLProps } from "react"
import { useMemo } from "react"
import { Cell, Pie, PieChart, Tooltip } from "recharts"
import { cn } from "@/lib/utils"

// const RADIAN = Math.PI / 180
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Notes (Qodana): unused constant renderCustomizedLabel
// const renderCustomizedLabel: FC<PieLabelRenderProps> = ({
//   cx = 0,
//   cy = 0,
//   midAngle,
//   innerRadius = 0,
//   outerRadius = 0,
//   percent = 0,
// }) => {
//   const radius = +innerRadius + (+outerRadius - +innerRadius) * 0.5
//   const x = +cx + radius * Math.cos(-midAngle * RADIAN)
//   const y = +cy + radius * Math.sin(-midAngle * RADIAN)
//
//   return (
//     <text x={x} y={y} fontSize={8.824} fill="white" textAnchor={"middle"} dominantBaseline="central">
//       {`${(+percent * 100).toFixed(0)}%`}
//     </text>
//   )
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip: FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="border bg-white/50 p-3 text-xs">
        <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

export interface CustomPieChartProps {
  data: {
    name: string
    value: number
  }[]
  colors?: string[]
  title?: string
  width?: number
  height?: number
  thickness?: number
  titleClassName?: HTMLProps<HTMLElement>["className"]
}

const DEFAULT_INNER_RADIUS = 40
const DEFAULT_OUTER_RADIUS = 70
const DEFAULT_WIDTH = 140
const DEFAULT_HEIGHT = 140
const DEFAULT_THICKNESS = DEFAULT_OUTER_RADIUS - DEFAULT_INNER_RADIUS
const DEFAULT_COLORS = ["#27AAE1", "#E3E8F5"]

const CustomPieChart: FC<CustomPieChartProps> = ({ data, colors, title, width, height, thickness, titleClassName }) => {
  const COLORS = colors || DEFAULT_COLORS

  const { innerRadius, outerRadius } = useMemo(() => {
    const outerRadius = Math.min(width || DEFAULT_WIDTH, height || DEFAULT_HEIGHT) / 2
    const innerRadius = outerRadius - (thickness || DEFAULT_THICKNESS)

    return { innerRadius, outerRadius }
  }, [width, height, thickness])

  return (
    <div className="relative h-fit w-fit">
      {title && (
        <span
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-secondary-foreground",
            titleClassName
          )}
        >
          {title}
        </span>
      )}

      <PieChart width={width || DEFAULT_WIDTH} height={height || DEFAULT_HEIGHT} className="relative" title={title}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={innerRadius || DEFAULT_INNER_RADIUS}
          outerRadius={outerRadius || DEFAULT_OUTER_RADIUS}
          fill="#D5FAFD"
          dataKey="value"
        >
          {data && data.length !== 0
            ? data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            : null}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  )
}

export default CustomPieChart
