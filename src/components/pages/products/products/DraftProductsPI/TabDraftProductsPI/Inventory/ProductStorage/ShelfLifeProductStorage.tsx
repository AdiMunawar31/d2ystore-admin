"use client"

import { useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListUnitOfMeasure from "@/api/products/unit-of-measurement/useInfiniteListUnitOfMeasure"
import Combobox from "@/components/custom/Combobox"
import FormUnitOfMeasure from "@/components/pages/products/unit-of-measure/FormUnitOfMeasure"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const ShelfLifeProductStorage = () => {
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
    <div className="flex items-center gap-4">
      <div className="block">
        <Label htmlFor="shelf-life-product-storage">Shelf Life</Label>
        <Input
          id="shelf-life-product-storage"
          type="number"
          min={0}
          value={inventory.storage.shelf?.shelf_life}
          onChange={(e) =>
            setInventory((prev) => ({
              ...prev,
              storage: {
                ...prev.storage,
                shelf: {
                  ...prev.storage.shelf,
                  shelf_life: e.target.value !== "" ? Number(e.target.value) : undefined,
                },
              },
            }))
          }
          placeholder="000.00"
        />
      </div>

      <div className="block w-full">
        <Label>Shelf Life Unit</Label>
        <Combobox
          data={listData.listSelectData}
          placeholder={"Choose Shelf Life Unit"}
          isHasMoreNextPage={hasNextPage}
          onFetchNextPage={fetchNextPage}
          isLoadingData={isLoading || isFetchingNextPage}
          value={inventory.storage.shelf?.uom?.name}
          onValueChange={(value) => {
            const dataSelected = listData.listRawData.find((item) => item.id.toLowerCase() === value.toLowerCase())

            setInventory((prev) => ({
              ...prev,
              storage: {
                ...prev.storage,
                shelf: {
                  ...prev.storage.shelf,
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
            storage: {
              ...prev.storage,
              shelf: {
                ...prev.storage.shelf,
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
    </div>
  )
}

export default ShelfLifeProductStorage
