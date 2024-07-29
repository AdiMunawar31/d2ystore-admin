import ActionDetailDraft from "./ActionDetailDraft"
import TitleDetailDraft from "./TitleDetailDraft"
import UploadImageDetailDraft from "./UploadImageDetailDraft"

const DetailDraftProductsPI = () => {
  return (
    <section className="flex gap-4 p-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <UploadImageDetailDraft />
        <TitleDetailDraft />
      </div>

      <ActionDetailDraft />
    </section>
  )
}

export default DetailDraftProductsPI
