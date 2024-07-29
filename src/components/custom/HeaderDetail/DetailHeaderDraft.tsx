"use client"

import Breadcrumb from "@/components/custom/Breadcrumb"
import type { DataBreadscrumbInterface } from "@/lib/interfaces/component"

type DetailHeaderDraftProps = {
  dataBreadcrumb: DataBreadscrumbInterface[]
  subtitle?: string
}

const DetailHeaderDraft = ({ dataBreadcrumb, subtitle }: DetailHeaderDraftProps) => {
  return (
    <section className="flex flex-col">
      <Breadcrumb data={dataBreadcrumb} />

      {subtitle && <h5 className="text-xs text-neutral-grey-600-body-text">{subtitle}</h5>}
    </section>
  )
}

export default DetailHeaderDraft
