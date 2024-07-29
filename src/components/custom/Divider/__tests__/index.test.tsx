import { render } from "@testing-library/react"
import Divider from ".."

describe("Divider", () => {
  it("shound renders without crashing", () => {
    render(<Divider />)
  })

  it("shound applies the correct class for solid variant", () => {
    const { container } = render(<Divider variant="solid" />)
    expect(container.firstChild).toHaveClass("border-t border-gray-200")
  })

  it("shound applies the correct class for dashed variant", () => {
    const { container } = render(<Divider variant="dashed" />)
    expect(container.firstChild).toHaveClass("border-t border-dashed border-gray-200")
  })

  it("shound applies the correct class for dotted variant", () => {
    const { container } = render(<Divider variant="dotted" />)
    expect(container.firstChild).toHaveClass("border-t border-dotted border-gray-200")
  })

  it("shound applies the default solid class when no variant is provided", () => {
    const { container } = render(<Divider />)
    expect(container.firstChild).toHaveClass("border-t border-gray-200")
  })
})
