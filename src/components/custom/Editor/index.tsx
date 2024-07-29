import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import "./CKEditor.css"

interface Props {
  data: string
  setData: (data: string) => void
}

const editorConfiguration = {
  toolbar: ["bold", "italic", "underline", "alignment", "numberedList", "link", "|", "undo", "redo"],
}

export default function Editor({ data, setData }: Props) {
  return (
    <CKEditor
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      editor={ClassicEditor}
      data={data}
      config={editorConfiguration}
      onChange={(_, editor) => {
        const dataEditor = editor.getData()
        setData(dataEditor)
      }}
    />
  )
}
