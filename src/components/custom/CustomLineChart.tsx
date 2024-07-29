"use client"

import type { FC } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export interface CustomLineChartProps {
  data: {
    name: string
    value: number
  }[]
  colors?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataKeyLine?: any
}

const DEFAULT_COLORS = ["#27AAE1", "#4FBC47", "#F43F5E", "#F59E0B", "#FF328B", "#6D00A8"]

const CustomLineChart: FC<CustomLineChartProps> = ({ data, colors, dataKeyLine }) => {
  const COLORS = colors || DEFAULT_COLORS

  return (
    <ResponsiveContainer height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip />
        <Legend />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {dataKeyLine.map((entry: any, index: number) => (
          <Line
            key={`cell-${index}`}
            dataKey={dataKeyLine[index]}
            stroke={COLORS[index % COLORS.length]}
            type="natural"
            dot={false}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CustomLineChart
