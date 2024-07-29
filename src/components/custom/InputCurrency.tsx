import type { ChangeEvent } from "react"
import React, { useState, memo } from "react"
import { formatCurrencyInput, parseFormattedInput } from "@/lib/utils/formatters"
import { Input } from "../ui/input"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InputCurrencyProps extends Record<string, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cbValue?: (data: any) => void
}

const InputCurrency: React.FC<InputCurrencyProps> = memo((props) => {
  const { value, cbValue, ...restProps } = props
  const [inputValue, setInputValue] = useState<string>(formatCurrencyInput(value || ""))

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, "")
    const numericValue = parseFormattedInput(rawValue)

    if (cbValue) {
      cbValue(numericValue)
    }

    setInputValue(formatCurrencyInput(numericValue))
  }

  return <Input {...restProps} type="text" value={inputValue} onChange={handleInputChange} />
})

InputCurrency.displayName = "InputCurrency"

export default InputCurrency
