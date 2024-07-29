"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListUnitOfMeasure from "@/api/products/unit-of-measurement/useInfiniteListUnitOfMeasure"
import Combobox from "@/components/custom/Combobox"
import FormUnitOfMeasure from "@/components/pages/products/unit-of-measure/FormUnitOfMeasure"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ProductWeight = () => {
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
      <h2 className="text-sm font-bold">Product Weight</h2>

      <div className="flex items-center gap-4">
        <div className="block">
          <Label htmlFor="net-weight-inventory">Net Weight</Label>
          <Input
            id="net-weight-inventory"
            type="number"
            min="0"
            value={inventory?.weight?.nett}
            onChange={(e) =>
              setInventory((prev) => ({
                ...prev,
                weight: {
                  ...prev?.weight,
                  nett: e.target.value !== "" ? Number(e.target.value) : undefined,
                },
              }))
            }
            placeholder="000.00"
          />
        </div>

        <div className="block">
          <Label htmlFor="gross-weight-inventory">Gross Weight</Label>
          <Input
            id="gross-weight-inventory"
            type="number"
            min="0"
            value={inventory?.weight?.gross}
            onChange={(e) =>
              setInventory((prev) => ({
                ...prev,
                weight: {
                  ...prev?.weight,
                  gross: e.target.value !== "" ? Number(e.target.value) : undefined,
                },
              }))
            }
            placeholder="000.00"
          />
        </div>

        <div className="block w-full">
          <Label>Weight UoM</Label>
          <Combobox
            data={listData.listSelectData}
            placeholder={"Choose Weight UoM"}
            isHasMoreNextPage={hasNextPage}
            onFetchNextPage={fetchNextPage}
            isLoadingData={isLoading || isFetchingNextPage}
            value={inventory.weight.uom?.format}
            onValueChange={(value) => {
              const dataSelected = listData.listRawData.find((item) => item.id.toLowerCase() === value.toLowerCase())

              setInventory((prev) => ({
                ...prev,
                weight: {
                  ...prev?.weight,
                  uom: dataSelected && {
                    id: dataSelected.id,
                    name: dataSelected.name,
                    code: dataSelected.code,
                    format: dataSelected.format,
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
            weight: {
              ...prev?.weight,
              uom: {
                id: data.id,
                name: data.name,
                code: data.code,
                format: data.format,
              },
            },
          }))
        }}
        removeTrigger
      />
    </section>
  )
}

export default ProductWeight
