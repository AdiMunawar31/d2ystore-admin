import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Alert from ".."

describe("Alert", () => {
  it("should renders with success variant", () => {
    const { getByText, container } = render(<Alert variant="success" message="Success message" />)
    expect(getByText("Success message")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("bg-green-100")
  })

  it("should renders with info variant", () => {
    const { getByText, container } = render(<Alert variant="info" message="Info message" />)
    expect(getByText("Info message")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("bg-blue-100")
  })

  it("should renders with warning variant", () => {
    const { getByText, container } = render(<Alert variant="warning" message="Warning message" />)
    expect(getByText("Warning message")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("bg-orange-100")
  })

  it("should renders with error variant", () => {
    const { getByText, container } = render(<Alert variant="error" message="Error message" />)
    expect(getByText("Error message")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("bg-red-100")
  })

  it("should renders with default variant when none is provided", () => {
    const { getByText, container } = render(<Alert message="Default variant message" />)
    expect(getByText("Default variant message")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("bg-blue-100")
  })

  it("should renders with action", () => {
    const { getByText } = render(<Alert message="Message with action" action={<button>Click me</button>} />)
    expect(getByText("Message with action")).toBeInTheDocument()
    expect(getByText("Click me")).toBeInTheDocument()
  })
})
