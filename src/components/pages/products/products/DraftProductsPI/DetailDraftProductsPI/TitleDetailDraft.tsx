"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useDraftProductsPIContext } from "@/providers/products/products/DraftProductsPIProvider"

const listCheckbox = [
  {
    value: "purchase",
    label: "Can be purchased",
  },
  {
    value: "sold",
    label: "Can be sold",
  },
  {
    value: "expensed",
    label: "Can be expensed",
  },
  {
    value: "manufactured",
    label: "Can be manufactured",
  },
  {
    value: "pos",
    label: "Available on POS",
  },
]

const TitleDetailDraft = () => {
  const { detail, setDetail, dataProducts } = useDraftProductsPIContext()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-1 flex-col">
        {/* <div className='flex items-center gap-2 bg-red-50'> */}
        <input
          type="text"
          value={detail.name}
          onChange={(e) => setDetail({ ...detail, name: e.target.value })}
          className="max-w-full overflow-visible text-ellipsis whitespace-nowrap text-2xl font-bold outline-none placeholder:text-lg"
          placeholder="Input Products Name..."
        />
        {/* </div> */}

        {dataProducts && <p className="break-all">{dataProducts.code}</p>}
      </div>

      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {listCheckbox.map((item) => (
          <li key={item.value} className="flex items-center gap-2">
            <Checkbox
              id={`detail-draft-${item.value}`}
              checked={detail.available_action.includes(item.value)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setDetail((prev) => ({
                    ...prev,
                    available_action: [...prev.available_action, item.value],
                  }))
                } else {
                  setDetail((prev) => ({
                    ...prev,
                    available_action: prev.available_action.filter((action) => action !== item.value),
                  }))
                }
              }}
              className="border-gray-300"
            />
            <Label htmlFor={`detail-draft-${item.value}`} className="whitespace-nowrap text-xs">
              {item.label}
            </Label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TitleDetailDraft
