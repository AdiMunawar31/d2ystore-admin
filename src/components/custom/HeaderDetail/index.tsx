import { Button } from "@/components/ui/button"
import type { DataBreadscrumbInterface } from "@/lib/interfaces/component"
import DetailHeaderDraft from "./DetailHeaderDraft"

type HeaderDraftProps = {
  dataBreadcrumb: DataBreadscrumbInterface[]
  subtitle?: string
  disabledButton?: boolean
  textButton?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickButton?: any
  isLoading?: boolean
  hideButton?: boolean
  hideButtonCancel?: boolean
  textButtonCancel?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickButtonCancel?: any
}

const HeaderDraft = ({
  dataBreadcrumb,
  subtitle,
  disabledButton = false,
  textButton = "Submit",
  onClickButton,
  isLoading = false,
  hideButton = false,
  hideButtonCancel = true,
  textButtonCancel = "Cancel",
  onClickButtonCancel,
}: HeaderDraftProps) => {
  return (
    <header className="sticky top-[var(--header-height)] z-50 flex items-center justify-between gap-4 border-b bg-background p-4">
      <DetailHeaderDraft dataBreadcrumb={dataBreadcrumb} subtitle={subtitle} />
      <div className="flex items-center gap-2">
        {!hideButtonCancel ? (
          <Button variant="ghost-destructive" onClick={onClickButtonCancel} isLoading={isLoading}>
            {textButtonCancel}
          </Button>
        ) : null}
        {!hideButton ? (
          <Button variant="primary" disabled={disabledButton} onClick={onClickButton} isLoading={isLoading}>
            {textButton}
          </Button>
        ) : null}
      </div>
    </header>
  )
}

export default HeaderDraft
