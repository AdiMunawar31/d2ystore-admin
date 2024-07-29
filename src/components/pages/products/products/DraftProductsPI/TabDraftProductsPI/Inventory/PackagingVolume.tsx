"use client"

import { useMemo, useState } from "react"
import { X } from "lucide-react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListUnitOfMeasure from "@/api/products/unit-of-measurement/useInfiniteListUnitOfMeasure"
import Combobox from "@/components/custom/Combobox"
import FormUnitOfMeasure from "@/components/pages/products/unit-of-measure/FormUnitOfMeasure"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const PackagingVolume = () => {
  const { inventory, setInventory } = useDraftProductsPIContext()

  const [openFormCreate, setOpenFormCreate] = useState({
    open: false,
    name: "",
  })

  const [search, setSearch] = useState("")
  const [debounceSearch] = useDebounceValue(search, 500)

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteListUnitOfMeasure({
    params: {
      keyword: debounceSearch,
    },
  })

  const listData = useMemo(() => {
    if (!data) {
      return {
        listSelectData: [],
        listRawData: [],
      }
    }

    return {
      listSelectData: data.pages.flat().map((item) => ({
        label: item.format,
        value: item.id,
      })),
      listRawData: data.pages.flat(),
    }
  }, [data])

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-bold">Packaging Volume</h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="block">
            <Label htmlFor="dimension-packaging-volume">Dimension (Length x Width x Height)</Label>

            <div className="flex items-center gap-1">
              <Input
                id="dimension-packaging-volume"
                type="number"
                min="0"
                value={inventory.volume.packaging_volume?.length}
                onChange={(e) =>
                  setInventory((prev) => ({
                    ...prev,
                    volume: {
                      ...prev?.volume,
                      packaging_volume: {
                        ...prev?.volume?.packaging_volume,
                        length: e.target.value !== "" ? Number(e.target.value) : undefined,
                      },
                    },
                  }))
                }
                className="min-w-16"
                placeholder="000.00"
              />

              <span>
                <X />
              </span>

              <Input
                id="width-packaging-volume"
                type="number"
                min="0"
                value={inventory.volume.packaging_volume?.width}
                onChange={(e) =>
                  setInventory((prev) => ({
                    ...prev,
                    volume: {
                      ...prev?.volume,
                      packaging_volume: {
                        ...prev?.volume?.packaging_volume,
                        width: e.target.value !== "" ? Number(e.target.value) : undefined,
                      },
                    },
                  }))
                }
                className="min-w-16"
                placeholder="000.00"
              />

              <span>
                <X />
              </span>

              <Input
                id="height-packaging-volume"
                type="number"
                min="0"
                value={inventory.volume.packaging_volume?.height}
                onChange={(e) =>
                  setInventory((prev) => ({
                    ...prev,
                    volume: {
                      ...prev?.volume,
                      packaging_volume: {
                        ...prev?.volume?.packaging_volume,
                        height: e.target.value !== "" ? Number(e.target.value) : undefined,
                      },
                    },
                  }))
                }
                className="min-w-16"
                placeholder="000.00"
              />
            </div>
          </div>

          <div className="block w-full">
            <Label htmlFor="volume-packaging-volume">Volume</Label>
            <Input
              id="volume-packaging-volume"
              type="number"
              min="0"
              value={inventory.volume.packaging_volume?.volume}
              onChange={(e) =>
                setInventory((prev) => ({
                  ...prev,
                  volume: {
                    ...prev?.volume,
                    packaging_volume: {
                      ...prev?.volume?.packaging_volume,
                      volume: e.target.value !== "" ? Number(e.target.value) : undefined,
                    },
                  },
                }))
              }
              placeholder="000.00"
              wrapClassName="w-full"
            />
          </div>
        </div>

        <div className="block w-full">
          <Label>Volume UoM</Label>
          <Combobox
            data={listData.listSelectData}
            placeholder={"Choose Volume UoM"}
            isHasMoreNextPage={hasNextPage}
            onFetchNextPage={fetchNextPage}
            isLoadingData={isLoading || isFetchingNextPage}
            value={inventory.volume.packaging_volume?.uom?.format}
            onValueChange={(value) => {
              const dataSelected = listData.listRawData.find((item) => item.id.toLowerCase() === value.toLowerCase())

              setInventory((prev) => ({
                ...prev,
                volume: {
                  ...prev?.volume,
                  packaging_volume: {
                    ...prev?.volume?.packaging_volume,
                    uom: dataSelected && {
                      id: dataSelected.id,
                      name: dataSelected.name,
                      code: dataSelected.code,
                      format: dataSelected.format,
                    },
                  },
                },
              }))
            }}
            search={search}
            onSearchChange={setSearch}
            onSelectCreate={(value) => {
              setOpenFormCreate(() => ({
                open: true,
                name: value,
              }))
            }}
          />
        </div>
      </div>

      <FormUnitOfMeasure
        data={{
          name: openFormCreate.name,
        }}
        open={openFormCreate.open}
        onOpenChange={(open) => {
          setOpenFormCreate((prev) => ({
            ...prev,
            open,
          }))
        }}
        onSuccessSubmit={(data) => {
          setInventory((prev) => ({
            ...prev,
            volume: {
              ...prev?.volume,
              packaging_volume: {
                ...prev?.volume?.packaging_volume,
                uom: {
                  id: data.id,
                  name: data.name,
                  code: data.code,
                  format: data.format,
                },
              },
            },
          }))
        }}
        removeTrigger
      />
    </section>
  )
}

export default PackagingVolume
