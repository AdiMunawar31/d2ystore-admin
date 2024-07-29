"use client"

import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useProductsPIContext } from "@/providers/products/products/ProductsPIProvider"
import CardProductPI from "./CardProductPI"

const GridProductsPI = () => {
  const { listProducts, isLoadingListProducts, layout } = useProductsPIContext()

  return (
    <section className={cn("grow bg-neutral-grey-200-bg p-4", layout !== "grid" ? "hidden" : "")}>
      <ul className={cn("grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4")}>
        {!isLoadingListProducts ? (
          listProducts.length > 0 ? (
            listProducts.map((item, index) => (
              <li key={index}>
                <CardProductPI data={item} />
              </li>
            ))
          ) : (
            <li className="col-span-1 flex items-center justify-center p-4 md:col-span-3 lg:col-span-4">
              <span className="text-sm italic text-neutral-grey-600-body-text">No Result founds.</span>
            </li>
          )
        ) : (
          <li className="col-span-1 flex items-center justify-center p-4 md:col-span-3 lg:col-span-4">
            <span className="animate-spin">
              <Loader2 size={36} />
            </span>
          </li>
        )}
      </ul>
    </section>
  )
}

export default GridProductsPI
