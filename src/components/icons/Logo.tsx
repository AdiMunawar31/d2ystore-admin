import type { FC } from "react"
import Image from "next/image"

const Logo: FC<{ width?: number; height?: number }> = ({ width = 137, height = 33 }) => {
  return <Image src={"/logo.png"} width={width} height={height} alt="logo" />
}

export default Logo
