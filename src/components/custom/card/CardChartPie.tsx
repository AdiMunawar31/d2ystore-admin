"use client"

import type { FC } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const CustomPieChart = dynamic(() => import("@/components/custom/CustomPieChart"), { ssr: false })

export interface CardChartPieProps {
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  titlePie?: string
  dataLegend?: {
    name?: string
    desc?: string
    isIconRed?: boolean
    isIconBlue?: boolean
  }[]
  isDetail?: boolean
}

const CardChartPie: FC<CardChartPieProps> = ({ data, isDetail, title, titlePie, dataLegend }) => {
  return (
    <Card className="flex min-h-[299px] flex-col divide-y divide-gray-200">
      <p className={`p-4 text-lg font-bold text-gray-500`}>{title}</p>

      <div className="flex grow flex-col p-4">
        <div className="my-5 flex justify-center">
          <CustomPieChart data={data} title={titlePie} />
        </div>
        {isDetail ? (
          dataLegend && dataLegend.length !== 0 ? (
            <div className="mt-auto flex flex-col">
              {dataLegend.map((item) => (
                <div className="grid grid-cols-2" key={item.name}>
                  <p className="text-xs text-neutral-600">{item.name}</p>
                  <p className="text-xs font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          ) : null
        ) : (
          <div className="mt-auto grid grid-cols-3 gap-2 ">
            {dataLegend && dataLegend.length !== 0
              ? dataLegend.map((item) => (
                  <div className="flex flex-col" key={item.name}>
                    <div className="flex flex-row">
                      {item.isIconRed || item.isIconBlue ? (
                        <Image
                          src={item.isIconRed ? "/images/circle_red.png" : "/images/circle_blue.png"}
                          alt="Picture of the author"
                          width={14}
                          height={14}
                        />
                      ) : null}
                      <p className="text-xs text-neutral-600">{item.name}</p>
                    </div>
                    <p className="text-xs font-bold">{item.desc}</p>
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
    </Card>
  )
}

export default CardChartPie
