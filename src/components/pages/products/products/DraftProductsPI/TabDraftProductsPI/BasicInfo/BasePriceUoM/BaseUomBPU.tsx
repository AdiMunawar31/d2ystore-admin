"use client"

import { useMemo, useState } from "react"
import { ulid } from "ulidx"
import { useDebounceValue } from "usehooks-ts"
import useInfiniteListUnitOfMeasure from "@/api/products/unit-of-measurement/useInfiniteListUnitOfMeasure"
import Combobox from "@/components/custom/Combobox"
import FormUnitOfMeasure from "@/components/pages/products/unit-of-measure/FormUnitOfMeasure"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const BaseUomBPU = () => {
  const { basicInfo, setBasicInfo } = useDraftProductsPIContext()

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
    <>
      <div className="block">
        <Label required>Base Unit of Measure</Label>
        <Combobox
          data={listData.listSelectData}
          placeholder={"Choose Base Unit of Measure"}
          isHasMoreNextPage={hasNextPage}
          onFetchNextPage={fetchNextPage}
          isLoadingData={isLoading || isFetchingNextPage}
          value={basicInfo.base_uom?.format}
          onValueChange={(value) => {
            const dataSelected = listData.listRawData.find((item) => item.id.toLowerCase() === value.toLowerCase())

            setBasicInfo((prev) => ({
              ...prev,
              base_uom: dataSelected && {
                id: dataSelected.id,
                name: dataSelected.name,
                code: dataSelected.code,
                format: dataSelected.format,
              },
              uom_levels: [
                {
                  key: ulid(),
                  id: "",
                  name: "",
                  uom: dataSelected && {
                    id: dataSelected.id,
                    name: dataSelected.name,
                    code: dataSelected.code,
                    format: dataSelected.format,
                  },
                  qty: 1,
                  convertion: 1,
                },
              ],
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
          setBasicInfo((prev) => ({
            ...prev,
            base_uom: {
              id: data.id,
              name: data.name,
              code: data.code,
              format: data.format,
            },
          }))
        }}
        removeTrigger
      />
    </>
  )
}

export default BaseUomBPU
