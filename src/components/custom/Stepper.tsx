import { Fragment } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  activeStep: number
  steps: string[]
}

const Step = ({ label, state }: { label: string; state: "ACTIVE" | "COMPLETED" | "IDLE" }) => {
  return (
    <div className="box-content flex min-w-72 items-center justify-center gap-5">
      <div
        className={cn("flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-[#C5D0DF]", {
          "border-primary bg-[#E9F7FC]": state === "ACTIVE",
          "border-primary bg-primary": state === "COMPLETED",
        })}
      >
        {state === "COMPLETED" && <Check size={24} strokeWidth={3} color="#fff" />}
      </div>
      <p
        className={cn("text-neutral-grey-600-body-text", {
          "font-medium text-primary": state === "ACTIVE",
          "font-medium text-neutral-grey-900 ": state === "COMPLETED",
        })}
      >
        {label}
      </p>
    </div>
  )
}

export default function Stepper({ activeStep, steps }: Props) {
  return (
    <div className="py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex w-full flex-col items-center justify-center gap-y-5 lg:flex-row">
          {steps.map((step, idx) => {
            return (
              <Fragment key={step}>
                <Step state={activeStep === idx ? "ACTIVE" : activeStep > idx ? "COMPLETED" : "IDLE"} label={step} />
                {steps?.length > idx + 1 && (
                  <div className="mx-4 w-full max-w-[340px] border-t border-dashed border-border lg:border-neutral-grey-600-body-text" />
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
