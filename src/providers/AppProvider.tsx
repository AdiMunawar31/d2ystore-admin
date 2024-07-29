"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useState } from "react"

interface AppContextData {
  test: any
  setTest: any
}

const AppContext = createContext<AppContextData | undefined>(undefined)

function useAppContext(): AppContextData {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider")
  }
  return context
}

function AppProvider({ children }: { children: ReactNode }) {
  const [test, setTest] = useState("")
  return <AppContext.Provider value={{ test, setTest }}>{children}</AppContext.Provider>
}

export { AppProvider, useAppContext }
