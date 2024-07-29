"use client"

import type { FC } from "react"
import { ChevronDown, Settings } from "lucide-react"
import CustomLineChart from "@/components/custom/CustomLineChart"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export interface CardChartLineProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataKeyLine?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilter?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataFilter?: any[]
  useFilter?: boolean
}

const CardChartLine: FC<CardChartLineProps> = ({
  data,
  filter,
  setFilter,
  dataFilter,
  useFilter,
  title,
  dataKeyLine,
}) => {
  return (
    <Card className="flex-col pl-2">
      <div className="flex flex-row justify-between">
        <div className="flex-col">
          <p className="text-md flex p-4">{title}</p>
          {useFilter ? (
            <div className="pb-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"default"} className="gap-1 px-3 py-2">
                    <span className="text-lg font-bold text-black">
                      {filter && dataFilter && dataFilter.length !== 0
                        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          dataFilter?.find((item: any) => item.value === filter).label
                        : filter}
                    </span>
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="center">
                  {dataFilter && dataFilter.length !== 0
                    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      dataFilter.map((item: any, index: number) => (
                        <DropdownMenuItem
                          className="cursor-pointer justify-center"
                          key={index}
                          onClick={() => setFilter(item.value)}
                        >
                          {item.label}
                        </DropdownMenuItem>
                      ))
                    : null}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : null}
        </div>
        <div className="flex-col">
          <Button variant={"outline"} className="m-4">
            <Settings color="#667A8E" />
            Setting
          </Button>
        </div>
      </div>
      <div className="px-2 py-6">
        <div className="my-5 flex justify-center">
          <CustomLineChart data={data} dataKeyLine={dataKeyLine} />
        </div>
      </div>
    </Card>
  )
}

export default CardChartLine
