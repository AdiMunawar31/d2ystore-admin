import ActionHeaderDraft from "./ActionHeaderDraft"
import DetailHeaderDraft from "./DetailHeaderDraft"

const HeaderDraftTargetManagement = () => {
  return (
    <header className="sticky top-[var(--header-height)] z-50 flex items-center justify-between gap-4 border-b bg-background p-4">
      <DetailHeaderDraft />
      <ActionHeaderDraft />
    </header>
  )
}

export default HeaderDraftTargetManagement
