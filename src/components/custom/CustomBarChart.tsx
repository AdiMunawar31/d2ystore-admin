"use client"

import type { FC } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export interface CustomBarChartProps {
  data: {
    name: string
    value: number
  }[]
  colors?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataKeyBar?: any
}

const DEFAULT_COLORS = ["#27AAE1", "#4FBC47", "#F43F5E", "#F59E0B", "#FF328B", "#6D00A8"]

const CustomBarChart: FC<CustomBarChartProps> = ({ data, colors, dataKeyBar }) => {
  const COLORS = colors || DEFAULT_COLORS

  return (
    <ResponsiveContainer height={400}>
      <BarChart
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
        <Legend iconType="circle" />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {dataKeyBar.map((entry: any, index: number) => (
          <Bar key={`cell-${index}`} dataKey={dataKeyBar[index]} fill={COLORS[index % COLORS.length]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomBarChart
