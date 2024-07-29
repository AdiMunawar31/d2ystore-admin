import { format, isSameDay, isThisWeek, isThisYear, isToday, isYesterday } from "date-fns"
import { id } from "date-fns/locale"

export function formatCurrency({
  amount,
  currencyCode = "IDR",
  locale = "id-ID",
}: {
  amount?: number
  currencyCode?: string
  locale?: string
}): string {
  const formattedNumber = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
  }).format(amount || 0)
  return formattedNumber
}

export const formatCurrencyInput = (value: number | undefined): string => {
  if (value === undefined || value === null) return ""
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export const parseFormattedInput = (value: string): number | undefined => {
  if (value === undefined || value === null) return undefined
  const parsedValue = parseInt(value.replace(/\./g, ""), 10)
  return isNaN(parsedValue) ? undefined : parsedValue
}

export function numberWithThousandsSeparator(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export function formatGroupChatDate(date: Date) {
  if (isToday(date)) {
    return "Hari ini"
  } else if (isYesterday(date)) {
    return "Kemarin"
  } else if (isThisWeek(date)) {
    return format(date, "iiii", { locale: id })
  } else if (isThisYear(date)) {
    return format(date, "iii, d MMM", { locale: id })
  } else {
    return format(date, "d MMM yyyy", { locale: id })
  }
}

export const formattedDateChat = (date: Date) => {
  return format(date, "HH:mm", { locale: id })
}

export const formattedDateRoomChat = (date: Date) => {
  const now = new Date()

  if (isSameDay(date, now)) {
    return format(date, "HH:mm", { locale: id })
  } else if (isThisYear(date)) {
    return format(date, "d MMM", { locale: id })
  } else {
    return format(date, "d MMM yyyy", { locale: id })
  }
}

export const translateDateToDay = (date: Date) => {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  if (date.toDateString() === today.toDateString()) {
    return "today"
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "tomorrow"
  } else {
    const timeDiff = date.getTime() - today.getTime()
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) // Menghitung selisih hari

    if (diffDays > 1 && diffDays < 6) {
      return "in " + diffDays + " days"
    } else if (diffDays === 1) {
      return "tomorrow"
    } else {
      return format(date, "d MMM yyyy, HH:mm", { locale: id })
    }
  }
}

export function percentage({
  inputValue,
  totalValue,
}: {
  inputValue?: number
  totalValue?: number
}): number | undefined {
  const formattedNumber = totalValue && inputValue && ((totalValue - inputValue) / totalValue) * 100
  return formattedNumber
}

export function formatPercent(value: number) {
  if (Number.isInteger(value)) {
    return value
  } else {
    return value.toFixed(2)
  }
}
