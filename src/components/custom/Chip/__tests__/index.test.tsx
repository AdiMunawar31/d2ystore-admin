import { render } from "@testing-library/react"
import Chip from "../"

describe("Chip", () => {
  it("should renders with green styles for green color", () => {
    const { getByText } = render(<Chip label="Green Label" color="green" />)
    expect(getByText("Green Label")).toHaveClass("bg-success-lightest text-success-lightest-foreground")
  })

  it("should renders with red styles for red color", () => {
    const { getByText } = render(<Chip label="Red Label" color="red" />)
    expect(getByText("Red Label")).toHaveClass("bg-destructive-lightest text-destructive-lightest-foreground")
  })

  it("should renders with yellow styles for yellow color", () => {
    const { getByText } = render(<Chip label="Yellow Label" color="yellow" />)
    expect(getByText("Yellow Label")).toHaveClass("bg-warning-lightest text-warning-lightest-foreground")
  })

  it("should renders with gray styles for gray color", () => {
    const { getByText } = render(<Chip label="Gray Label" color="gray" />)
    expect(getByText("Gray Label")).toHaveClass("bg-neutral-grey-200-bg text-neutral-grey-600-body-text")
  })

  it("should renders with default label when none is provided", () => {
    const { getByText } = render(<Chip color="gray" />)
    expect(getByText("Unknown")).toBeInTheDocument()
  })
})
