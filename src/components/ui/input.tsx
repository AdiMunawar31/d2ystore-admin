import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  removeWrap?: boolean
  wrapClassName?: string
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  responsiveFilter?: boolean
  responsiveData?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      startContent,
      endContent,
      removeWrap,
      wrapClassName,
      responsiveFilter,
      responsiveData,
      className,
      type,
      ...props
    },
    ref
  ) => {
    if (removeWrap) {
      return (
        <>
          {startContent}

          <input
            type={type}
            className={cn(
              "flex h-10 min-w-14 bg-transparent px-3 py-2 text-sm outline-none file:mr-2 file:border-0 file:bg-transparent file:px-0 file:text-sm file:font-medium placeholder:text-placeholder disabled:cursor-not-allowed disabled:bg-neutral-grey-200-bg",
              className,
              !!startContent && "px-2"
            )}
            ref={ref}
            {...props}
          />

          {endContent}
        </>
      )
    }

    if (responsiveFilter) {
      return (
        <div
          className={cn(
            "flex h-10 w-full items-center rounded border bg-background text-sm ring-offset-transparent focus-within:outline-none focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-grey-200-bg group-invalid:border-destructive",
            props.disabled && "bg-neutral-grey-200-bg",
            props.readOnly && "bg-neutral-grey-200-bg",
            wrapClassName
          )}
        >
          <figure className="pl-3">
            <Search size={16} className="opacity-50" />
          </figure>

          <div className="mx-1 flex w-full flex-row flex-wrap">
            {responsiveData}

            <input
              type={type}
              className={cn(
                "flex min-w-14 bg-transparent px-4 py-2 text-sm outline-none file:mr-2 file:border-0 file:bg-transparent file:px-0 file:text-sm file:font-medium placeholder:text-placeholder read-only:bg-neutral-grey-200-bg disabled:cursor-not-allowed disabled:opacity-50",
                className,
                !!startContent && "px-2"
              )}
              ref={ref}
              {...props}
            />
          </div>

          {endContent}
        </div>
      )
    }

    return (
      <div
        className={cn(
          "flex h-10 w-full items-center rounded border bg-background text-sm ring-offset-transparent focus-within:outline-none focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:bg-neutral-grey-200-bg group-invalid:border-destructive",
          props.disabled && "bg-neutral-grey-200-bg",
          props.readOnly && "bg-neutral-grey-200-bg",
          wrapClassName
        )}
      >
        {startContent}

        <input
          type={type}
          className={cn(
            "flex h-full w-full min-w-14 bg-transparent px-4 py-2 text-sm outline-none file:mr-2 file:border-0 file:bg-transparent file:px-0 file:text-sm file:font-medium placeholder:text-placeholder read-only:bg-neutral-grey-200-bg disabled:cursor-not-allowed disabled:opacity-50",
            className,
            !!startContent && "px-2"
          )}
          ref={ref}
          {...props}
        />

        {endContent}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
