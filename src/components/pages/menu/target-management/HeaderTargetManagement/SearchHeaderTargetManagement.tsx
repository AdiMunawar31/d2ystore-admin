"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchHeaderTargetManagement = () => {
  const [searchTargetManagement, setsearchTargetManagement] = useState("")
  return (
    <>
      <Input
        wrapClassName="max-w-md p-0"
        placeholder="Search data"
        value={searchTargetManagement}
        onChange={(e) => setsearchTargetManagement(e.target.value)}
        startContent={
          <figure className="pl-3">
            <Search size={16} className="opacity-50" />
          </figure>
        }
        endContent={
          <Button variant="ghost" className="h-full rounded-none border-l p-0 px-2">
            <ChevronDown size={24} />
          </Button>
        }
      />
    </>
  )
}

export default SearchHeaderTargetManagement
