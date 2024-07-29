"use client"

import { LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const ButtonLogout = () => {
  return (
    <Button
      className="absolute right-5 top-5 border-2 border-sky-400 text-lg font-bold text-sky-400"
      onClick={async () => {
        // await TokenService.removeAccessToken()
      }}
    >
      <LogOutIcon />
      Logout
    </Button>
  )
}

export default ButtonLogout
