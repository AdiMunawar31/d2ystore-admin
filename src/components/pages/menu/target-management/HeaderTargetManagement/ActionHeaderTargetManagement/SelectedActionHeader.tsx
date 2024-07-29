import CustomAlertDialog from "@/components/custom/dialog/CustomAlertDialog"

const SelectedActionHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <CustomAlertDialog
        variantTrigger="outline-destructive"
        textTrigger="Delete"
        title="Confirmation Delete"
        description="Are you agree to delete the data?"
        warning="Delete data will affect to other related data"
        isLoadingConfirm={false}
        onConfirm={async () => {}}
      />
    </div>
  )
}

export default SelectedActionHeader
